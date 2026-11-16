import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { ConfigService } from "@nestjs/config";
import { CloudinaryUploadResult } from "@shared/shared/interfaces/cloudinary-upload.interface.js";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>("CLOUDINARY_CLOUD_NAME"),
      api_key: this.configService.get<string>("CLOUDINARY_API_KEY"),
      api_secret: this.configService.get<string>("CLOUDINARY_API_SECRET"),
      secure: true,
    });
  }

  async uploadImage(
    file: Express.Multer.File,
    folder: string = "auto-parts",
  ): Promise<CloudinaryUploadResult> {
    if (!file?.buffer) {
      throw new InternalServerErrorException("Image file is missing");
    }

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "image",
        },
        (error, result) => {
          if (error || !result) {
            return reject(
              new InternalServerErrorException("Image upload failed"),
            );
          }

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            format: result.format,
            width: result.width,
            height: result.height,
          });
        },
      );

      Readable.from([file.buffer]).pipe(uploadStream);
    });
  }

  async deleteImage(publicId: string) {
    try {
      const result = await cloudinary.uploader.destroy(publicId);

      return result;
    } catch {
      throw new InternalServerErrorException("Image deletion failed");
    }
  }
}
