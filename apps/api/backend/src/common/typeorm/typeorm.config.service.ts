import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { datasourceConfig } from '@common/db/datasource.config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const options = {
      ...datasourceConfig,
      autoLoadEntities: true,
      migrationsRun: !datasourceConfig.synchronize,
    };
    return options;
  }
}
