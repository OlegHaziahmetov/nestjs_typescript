import { CanActivate, ExecutionContext, UnauthorizedException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {

    }


    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const reg = context.switchToHttp().getRequest()
        try {
            const authHeader = reg.headers.authorization;
            const bearer = authHeader.split( ' ') [0];
            const token = authHeader.split( ' ') [1];

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException( {message: 'Пользователь не авторизован'})
            }
            const user = this.jwtService.verify(token);
            reg.user = user;
            return true;
        } catch(e) {
            throw new UnauthorizedException( {message: 'Пользователь не авторизован'})
        }
        
    }

}