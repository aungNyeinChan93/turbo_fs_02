/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DrizzleModule } from './drizzle/drizzle.module';
import { AuthModule as AM } from './auth/auth.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DrizzleModule,
    AM,
    AuthModule.forRootAsync({
      imports: [DrizzleModule],
      useFactory: (db: NodePgDatabase) => ({
        auth: betterAuth({
          database: drizzleAdapter(db, {
            provider: 'pg',
          })
        })
      }),
      inject: ['DRIZZLE']
    })
  ],
})
export class AppModule { }
