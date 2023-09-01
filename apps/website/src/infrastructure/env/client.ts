import { z } from 'zod';

export const clientEnvSchema = z.object({});

export const clientEnv = clientEnvSchema.parse(import.meta.env);
