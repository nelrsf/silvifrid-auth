import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdmUsersService } from 'src/adm-users/adm-users.service';
import { AdmUser } from 'src/adm-users/schemas/adm-user.schema';

@Injectable()
export class AuthService {

    user: AdmUser;

    constructor(private readonly admUserService: AdmUsersService,
                private readonly jwtService: JwtService) {

    }

    authenticate(userName: string, password: string) {
        return this.admUserService.findOne(userName).then(
            (user):boolean => {
                this.user = user[0];
                return this.validateUser(password);
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        );
    }

    validateUser(password: string) {
        if (this.user?.password === password) {
            return true;
        }
        else {
            return false;
        }
    }

    login(user: AdmUser){
        let payload = {
            userName: user.userName,
            password: user.password
        };
        return {
            token: this.jwtService.sign(payload)
        }
    }

}
