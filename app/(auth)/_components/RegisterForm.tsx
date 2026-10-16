"use client"
import { RegisterFormData, RegisterSchema } from "@/app/_utils/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { BeatLoader } from "react-spinners";


export default function LoginForm() {
    const {register , handleSubmit , formState:{errors , isSubmitting} , reset} = useForm({
            resolver : zodResolver(RegisterSchema)
        })
    
        const onSubmit= (data:RegisterFormData)=>{
            reset() ;
            console.log(data)
        }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-3">
           <label className="font-bold p-1 text-slate-500" htmlFor="name">
                Name
           </label> 
           <input 
                {...register("name")}
                type="text" 
                id="name" className="border p-2 border-slate-500 rounded-lg py-1 text-xl" 
            />
           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col mb-3">
           <label className="font-bold p-1 text-slate-500" htmlFor="email">
                Email
           </label> 
           <input 
                type="email" 
                {...register("email")}
                id="email" 
                className="border p-2 border-slate-500 rounded-lg py-1 text-xl" />
           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col mb-5">
           <label className="font-bold p-1 text-slate-500" htmlFor="password">
                Password
           </label> 
           <input 
                type="password"
                {...register("password")} 
                id="password" 
                className="border border-slate-500 rounded-lg py-1 p-2 text-xl" />
           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button type="submit" className="flex justify-center items-center bg-slate-800 text-white hover:bg-slate-900 w-full p-1 rounded-full mt-4 text-xl cursor-pointer">
            <IoMdLogIn/> {isSubmitting?<BeatLoader/>: "register"}
        </button>
        <div className="flex justify-center items-center gap-6 mt-6">
            <div className="flex justify-center bg-blue-100 items-center border w-1/2 border-blue-100 hover:bg-blue-200 rounded px-4 py-2 cursor-pointer">
                <FcGoogle className="text-4xl"/>
            </div>
            <div className="flex justify-center w-1/2 items-center border bg-slate-100 hover:bg-slate-200 rounded px-4 py-2 cursor-pointer">
                <FaGithub className="text-4xl"/>
            </div>
        </div>
    </form>
  )
}
