/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';

@Module({
  controllers: [SessionController],
  providers: [SessionService],
  imports: [
    DrizzleModule
  ]
})
export class SessionModule { }
