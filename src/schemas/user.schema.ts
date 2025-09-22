import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  _id: z.string().uuid(),
  username: z.string(),
  role: z.enum(["Murid", "Guru", "Staff", 'Admin']),
  class: z.string().optional(),
  isVoted: z.boolean(),
  password: z.string()
});

export type UserType = z.infer<typeof UserSchema>;
