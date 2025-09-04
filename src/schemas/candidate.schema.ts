import { z } from "zod";

export const CandidateSchema = z.object({
  name: z.string(),
  label: z.enum(['OSIS', 'MPK']),
  number: z.number(),
  image: z.string().url(),
});

export type CandidateType = z.infer<typeof CandidateSchema>;
