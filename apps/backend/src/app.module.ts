import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './prisma.service'
import { UsersModule } from './users/users.module';
import { WeaponsModule } from './weapons/weapons.module';

@Module({
  imports: [UsersModule, WeaponsModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
