import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AdmUserDocument, AdmUser } from './schemas/adm-user.schema';


@Injectable()
export class AdmUsersService {

  constructor(@InjectModel(AdmUser.name) private admUserModel: Model<AdmUserDocument>) {}

  findOne(username: string) {
    return this.admUserModel.find({ userName: username }).exec();
  }

}
