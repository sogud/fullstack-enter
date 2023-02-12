import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';
import { CountService } from './count.service';
import { CreateCountDto } from './dto/create-count.dto';
import { UpdateCountDto } from './dto/update-count.dto';
import { Cache } from 'cache-manager';

@Controller('count')
export class CountController {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  @Get()
  async getCount() {
    const count: number = await this.cacheManager.get('count');
    return { count: count || 0 };
  }

  @Post()
  async updateCount() {
    const { count } = await this.getCount();
    await this.cacheManager.set('count', count + 1, 0);
    return { count: count + 1 };
  }
}
