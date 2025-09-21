import { z } from "zod";

export const LiveCountSchema = z.object({
  count: z.number(),
  name: z.string(),
  number: z.number(),
});

export const LiveCountArray= z.object({
  osis: z.array(LiveCountSchema),
  mpk: z.array(LiveCountSchema)
})


export type LiveCountType = z.infer<typeof LiveCountSchema>;
export type CountArrayType = z.infer<typeof LiveCountArray>;
