import { Controller, Get, NotFoundException, Param, Res} from '@nestjs/common';
import { AdmUsersService } from './adm-users.service';


@Controller('adm-users')
export class AdmUsersController {
  constructor(private readonly admUsersService: AdmUsersService) {}

  // @Get(':username')
  // findOne(@Param('username') username: string, @Res() res) {
  //   return this.admUsersService.findOne(username).then(
  //     (user)=>{
  //       res.send(user)
  //     }
  //   ).catch((error)=>{
  //     throw new NotFoundException(error);
  //   });
  // }


}
