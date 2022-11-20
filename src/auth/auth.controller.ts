import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AdmUser } from 'src/adm-users/schemas/adm-user.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post()
  async authUser(@Body() user: AdmUser) {
    let result = await this.authService.authenticate(user.userName, user.password);
    if (result) {
      return this.authService.login(user);
    } else {
      throw new UnauthorizedException();
    }
  }
}
