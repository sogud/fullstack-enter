import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountModule } from './count/count.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'fullstack_enter',
      entities: [],
      synchronize: true,
    }),
    CountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
