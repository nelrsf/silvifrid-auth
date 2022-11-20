import { Module } from '@nestjs/common';
import { AdmUsersService } from './adm-users.service';
import { AdmUsersController } from './adm-users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdmUser,  AdmUserSchema } from './schemas/adm-user.schema'



@Module({
  imports: [MongooseModule.forFeature([{ name: AdmUser.name, schema: AdmUserSchema }])],
  controllers: [AdmUsersController],
  providers: [AdmUsersService],
  exports: [AdmUsersService]
})
export class AdmUsersModule { }
