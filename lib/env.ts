import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.string().url(),
  DEMO_ACCOUNT_EMAIL: z.string().email(),
  DEMO_ACCOUNT_PASSWORD: z.string().min(8),
});

export const env = envSchema.parse(process.env);