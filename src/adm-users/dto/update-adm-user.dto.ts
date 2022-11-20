import { PartialType } from '@nestjs/mapped-types';
import { CreateAdmUserDto } from './create-adm-user.dto';

export class UpdateAdmUserDto extends PartialType(CreateAdmUserDto) {}
