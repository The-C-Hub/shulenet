import * as Joi from '@hapi/joi';

export const appConfigsValidator = Joi.object({
  PORT: Joi.number().required(),
  SUPABASE_API_KEY: Joi.string().required(),
  SUPABASE_API_URL: Joi.string().required(),
  SUPABASE_SERVICE_ROLE_KEY: Joi.string().required(),
  SUPABASE_JWT_SECRET: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_PASSWORD: Joi.string().required(),
});

export const loadAppconfigs = () => ({
  port: parseInt(process.env.PORT, 10),
  supabase: {
    url: process.env.SUPABASE_API_URL,
    anonApiKey: process.env.SUPABASE_API_KEY,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    jwtSecret: process.env.SUPABASE_JWT_SECRET,
  },
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
  },
});
