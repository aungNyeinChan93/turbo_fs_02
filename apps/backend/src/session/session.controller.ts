/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { SessionService } from './session.service';
import { Session, type UserSession, AllowAnonymous } from '@thallesp/nestjs-better-auth';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) { }


  @Get()
  testSession(@Session() session: UserSession) {
    return session;
  }
}
