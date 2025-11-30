/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DrizzleModule } from './drizzle/drizzle.module';
import { AuthModule as AM } from './auth/auth.module';
import { AuthGuard, AuthModule } from '@thallesp/nestjs-better-auth';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DrizzleModule,
    AM,
    AuthModule.forRootAsync({
      imports: [DrizzleModule, ConfigModule],
      useFactory: (db: NodePgDatabase, configService: ConfigService) => ({
        auth: betterAuth({
          database: drizzleAdapter(db, {
            provider: 'pg',
          }),
          emailAndPassword: {
            enabled: true,
          },
          trustedOrigins: [
            configService.getOrThrow<string>('UI_URL')
          ],
        }),
      }),
      inject: ['DRIZZLE', ConfigService]
    }),

  ],
})
export class AppModule { }
