import { z } from 'zod';
import type { Prisma } from '@prisma/client';

const dreamCreateInputSchema = z.object({
    title: z.string().min(1).max(255),
    content: z.string().min(1).max(255),
    sleepTime: z.date(),
    wakeTime: z.date(),
    type: z.array(z.string()),
    published: z.boolean()
});

export default function validateDreamCreateInput(input: Prisma.DreamCreateInput) {
    return dreamCreateInputSchema.safeParse(input);
}