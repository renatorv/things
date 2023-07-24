import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { FirebaseService } from './firebase/firebase.service';

// A fazer:
// Criar uma conta no Firebase
// Instalar o Firebase Admin

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly firebase: FirebaseService){}

  canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const request = context.switchToHttp().getRequest<Request>();

    // Bearer afdjasjfaçljgakj
    const [prefix, token] = request.headers.authorization?.split(' ');

    if(!token){
      throw new UnauthorizedException()
    }

    console.log(token);

    return this.firebase.verifyToken(token);
  }
}
