import z from 'zod'

export const detailsSchema = z.object({
    number: z.number(),
    organization: z.enum(['OSIS', 'MPK']),
    quote: z.string().optional(),
    name: z.string(),
    images: z.array(z.string()),
    vision: z.string(),
    mission: z.array(z.string()),
    programs: z.array(z.string())
})

export type DetailsType = z.infer<typeof detailsSchema>