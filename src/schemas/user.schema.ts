import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  uuid: z.string().uuid(),
  username: z.number(),
  role: z.enum(["Murid", "Guru", "Staff"]),
  grade: z.string().optional()
});

export type UserType = z.infer<typeof UserSchema>;
