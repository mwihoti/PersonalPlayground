import { z } from 'zod'

const AnimalSchema = z.object({
    id: z.string().uuid(),
    owner: z.string(),
    animal: z.string(),

});

export default AnimalSchema;