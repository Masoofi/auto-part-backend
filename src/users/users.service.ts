import { IsIn } from 'class-validator';
import { UpdateUserRoleDto } from './dto/update-user.dto.js';
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from "@nestjs/common";
import { UserQueryDto } from "./dto/user-query.dto.js";

import * as bcrypt from "bcrypt";

import { PrismaService } from "../prisma/prisma.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const { firstName, lastName, email, password, phone } = createUserDto;

    const normalizedEmail = email.trim().toLowerCase();

    // Check whether email already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      throw new ConflictException("Email already registered");
    }

    // Check whether phone already exists
    if (phone) {
      const existingPhone = await this.prisma.user.findUnique({
        where: { phone },
      });

      if (existingPhone) {
        throw new ConflictException("Phone number already registered");
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save user in database
    const user = await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email: normalizedEmail,
        password: hashedPassword,
        phone,
      },
    });

    // Never return password
    const { password: _, ...result } = user;

    return result;
  }

  async findAll(
    query: UserQueryDto = {
      page: 1,
      limit: 10,
    },
  ) {
    const { page = 1, limit = 10, search, role, isActive, email } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }
    if (role) {
      where.role = role;
    }
    if (isActive !== undefined) {
      where.isActive = isActive === true;
    }
    if (email) {
      where.email = { contains: email, mode: "insensitive" };
    }

    const [users, count] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          role: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      data: users,
      count,
      total: users.length,
      page,
      page_count: Math.ceil(count / limit),
    };
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const { password: _, ...result } = user;
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserRoleDto) {
    const { firstName, lastName, email, phone, role, isActive } = updateUserDto;

    const normalizedEmail = email?.trim().toLowerCase();

    // Check whether email already exists
    if (normalizedEmail) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: normalizedEmail },
      });

      if (existingUser && existingUser.id !== id) {
        throw new ConflictException("Email already registered");
      }
    }

    // Check whether phone already exists
    if (phone) {
      const existingPhone = await this.prisma.user.findUnique({
        where: { phone },
      });

      if (existingPhone && existingPhone.id !== id) {
        throw new ConflictException("Phone number already registered");
      }
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        email: normalizedEmail,
        phone,
        role,
        isActive,
      }
    });

    const { password: _, ...result } = user;
    return result;
  }
}
