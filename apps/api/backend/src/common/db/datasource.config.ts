import { Logger } from '@nestjs/common';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { DataSource } from 'typeorm';

const dbLogger = new Logger('DbPoolErrorHandler');
const envFilePath = path.resolve(
  process.cwd(),
  `.env/.env.${process.env.NODE_ENV || 'development'}`,
);
dotenv.config({ path: envFilePath });

export const datasourceConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/db/migrations/*.{ts,js}'],
  maxQueryExecutionTime: 10000,
  logging: ['error', 'warn'],
  logger: 'advanced-console',
  poolSize: 100,
  poolErrorHandler: (err) => {
    dbLogger.error(err?.message ?? err);
  },
};

const datasource = new DataSource(datasourceConfig);
export default datasource;
