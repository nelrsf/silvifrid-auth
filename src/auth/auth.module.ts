import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdmUsersModule } from 'src/adm-users/adm-users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './Jwt.Strategy';

let conf = new ConfigService();

@Module({
  imports: [ConfigModule.forRoot(),
            AdmUsersModule,
            JwtModule.register({
              secret: conf.get<string>('ENCRYPT_OPTIONS_SECRET'),
              signOptions: {
                  expiresIn: conf.get<string>('ENCRYPT_OPTIONS_EXPIRES_IN')
              }
            }
          )],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule { }

