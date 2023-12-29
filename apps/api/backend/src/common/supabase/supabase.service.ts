import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@common/supabase/supabase.types';
import { DbRowsData } from '@common/types/db-row-data.type';
import { BaseException } from '@common/exceptions/base.exception';

@Injectable()
export class SupabaseService {
  private readonly _url: string;
  private readonly _anonApiKey: string;
  private readonly _serviceRoleKey: string;

  constructor(private readonly _config: ConfigService) {
    this._url = this._config.get('supabase.url');
    this._anonApiKey = this._config.get('supabase.anonApiKey');
    this._serviceRoleKey = this._config.get('supabase.serviceRoleKey');
  }

  public createClient() {
    const supabaseClient = createClient<Database>(this._url, this._anonApiKey, {
      auth: {
        persistSession: false,
      },
    });
    return supabaseClient;
  }

  public createAdminClient() {
    const supabaseAdminClient = createClient<Database>(
      this._url,
      this._serviceRoleKey,
      {
        auth: {
          persistSession: false,
        },
      },
    );
    return supabaseAdminClient;
  }

  public async fetchAllRowsFromTable(
    tableName: string,
    retrievableColumns: string[],
  ): Promise<DbRowsData[]> {
    const supabaseClient = this.createClient();
    const { data, error } = await supabaseClient
      .from(tableName)
      .select(retrievableColumns.join(','));
    if (error) {
      throw new BaseException(error.message);
    }
    return data;
  }
}
