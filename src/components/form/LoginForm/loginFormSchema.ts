import { z } from "zod";

export const schema = z.object({
    email: z.string().email('Email Inválido'),
    password: z.string().min(6, 'A senha deve contar no minimo 6 characteres')
})

export type LoginData = z.infer<typeof schema>;