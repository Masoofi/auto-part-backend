
import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class CacheManagerService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // Get cached data
  async get<T>(key: string): Promise<T | undefined> {
    return this.cacheManager.get<T>(key);
  }

  // Save data in cache
  async set<T>(
    key: string,
    value: T,
    ttl = 300000,
  ): Promise<void> {
    await this.cacheManager.set(key, value, ttl);
  }

  // Delete cached data
  async delete(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }
}
