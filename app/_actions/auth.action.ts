"use server"

import { LoginFormData, LoginSchema } from "../_utils/loginSchema";
import { RegisterFormData, RegisterSchema } from "../_utils/registerSchema";


export const LoginAction =async  (data : LoginFormData)=>{
    const validation = LoginSchema.safeParse(data) ;
    if(!validation.success){
        return {error : "Invalid credintials"}
    }
    console.log(data)
    return {success : "Logged in successfully"}
}
export const RegisterAction =async  (data : RegisterFormData)=>{
    const validation = RegisterSchema.safeParse(data) ;
    if(!validation.success){
        return {error : "Invalid credintials"}
    }
    console.log(data)
    return {success : "Registered successfully"}
}