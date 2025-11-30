/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: 'DRIZZLE',
            useFactory: (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.getOrThrow<string>('DATABASE_URL')
                });

                const db = drizzle({ client: pool, })
                return db;
            },
            inject: [ConfigService]
        }
    ],
    exports: ["DRIZZLE"]
})
export class DrizzleModule { }
