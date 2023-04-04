import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule, HealthModule],
})
export class AppModule {}
