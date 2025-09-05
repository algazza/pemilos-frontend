import { z } from "zod";

export const VoteSchema = z.object({
  name: z.string(),
  kelas: z.string().optional(),
  role: z.enum(["Murid", "Guru", "Staff", 'Admin']),
  vote: z.boolean()
});

export type VoteType = z.infer<typeof VoteSchema>;
