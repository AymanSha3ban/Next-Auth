"use server"

import { LoginFormData, LoginSchema } from "../_utils/loginSchema";


export const LoginAction =async  (data : LoginFormData)=>{
    const validation = LoginSchema.safeParse(data) ;
    if(!validation.success){
        return {error : validation.error.message}
    }
    console.log(data)
    return {success : "Logged in successfully"}
}