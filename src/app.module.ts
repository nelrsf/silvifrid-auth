import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdmUsersModule } from './adm-users/adm-users.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [AdmUsersModule,
            ConfigModule.forRoot({isGlobal: true }),
            MongooseModule.forRoot((new ConfigService()).get<string>('DB_CONNECTION')),
            AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}


