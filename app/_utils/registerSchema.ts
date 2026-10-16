import {z} from "zod"

export const RegisterSchema= z.object({
    name : z
        .string()
        .min(3 ,{ message:"name must be at least 3 chars"})
        .nonempty() ,
    email : z
        .string()
        .email({ message:"Invaled Email"})
        .nonempty() ,
    password : z
        .string()
        .min(6 ,{ message:"passowrd must be 6 digits"})
        .nonempty() ,
    
})
export type RegisterFormData = z.infer<typeof RegisterSchema>