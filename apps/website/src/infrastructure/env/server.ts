import { z } from 'zod';

const serverEnvSchema = z.object({
  APP_ENV: z.enum([`local`, `preview`, `production`]).default(`local`),
  SANITY_TOKEN: z.string().default(`1234`),
});

export const serverEnv = serverEnvSchema.parse(import.meta.env);
