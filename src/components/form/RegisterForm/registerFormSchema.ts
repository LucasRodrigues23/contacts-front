import { z } from "zod";

export const schema = z.object({
    name: z.string().min(3, 'Nome deve conter no minimo 3 characteres'),
    email: z.string().email('Email Inválido'),
    password: z.string().min(6, 'Senha deve contar no minimo 6 characteres'),
    phone: z.string().min(9, 'tamanho minimo de 9 digitos').max(9, 'tamanhao maximo de 9 numero')
})

export type RegisterData = z.infer<typeof schema>;