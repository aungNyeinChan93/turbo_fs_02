import z from "zod";

export const RegisterSchema = z.object({
    name: z.string().nonempty(),
    email: z.email().nonempty(),
    password: z.string().nonempty(),
});

export type RegisterType = z.infer<typeof RegisterSchema>