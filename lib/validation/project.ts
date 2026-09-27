import { z } from "zod";

export const createProjectSchema = z.object({
  name: z
    .string()
    .min(2, "Nazwa projektu musi mieć co najmniej 2 znaki")
    .max(120, "Nazwa projektu jest za długa (maks. 120 znaków)"),
  description: z
    .string()
    .max(2000, "Opis jest za długi (maks. 2000 znaków)")
    .optional()
    .or(z.literal("")),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;