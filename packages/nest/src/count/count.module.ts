import { Module, CacheModule } from '@nestjs/common';
import { CountService } from './count.service';
import { CountController } from './count.controller';
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      // host: 'localhost',
      // port: 6379,
    }),
  ],
  controllers: [CountController],
  providers: [CountService],
})
export class CountModule {}
