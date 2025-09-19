import { z } from "zod";

export const LiveCountSchema = z.object({
  count: z.number(),
  name: z.string(),
  number: z.number(),
});


export type LiveCountType = z.infer<typeof LiveCountSchema>;
