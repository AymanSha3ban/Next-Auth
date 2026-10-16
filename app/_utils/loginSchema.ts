import {z} from "zod"

export const LoginSchema= z.object({
    email : z
        .string()
        .email({ message:"Invaled Email"})
        .nonempty() ,
    password : z
        .string()
        .min(6 ,{ message:"passowrd must be 6 digits"})
        .nonempty() ,
    
})
export type LoginFormData = z.infer<typeof LoginSchema>