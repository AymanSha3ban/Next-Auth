"use client"
import { LoginAction } from "@/app/_actions/auth.action";
import { LoginFormData, LoginSchema } from "@/app/_utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { BeatLoader } from "react-spinners";


export default function LoginForm() {
    const {register , handleSubmit , formState:{errors , isSubmitting} , reset} = useForm({
        resolver : zodResolver(LoginSchema)
    })

    const onSubmit= async (data:LoginFormData)=>{
        const result = await LoginAction(data);
        if (result?.success) {
            toast.success(result.success);
            reset();
        }
        
        if (result?.error) {
            toast.error(result.error);
        }
        
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-3">
           <label className="font-bold p-1 text-slate-500" htmlFor="email">
                Email
           </label> 
           <input
                type="email" 
                id="email" 
                {...register("email")}
                className="border p-2 border-slate-500 rounded-lg py-1 text-xl" 
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col mb-5">
           <label className="font-bold p-1 text-slate-500" htmlFor="password">
                Password
           </label> 
           <input 
                type="password" 
                id="password" 
                {...register("password")}
                className="border border-slate-500 rounded-lg py-1 p-2 text-xl" 
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button 
            type="submit" 
            disabled={isSubmitting}
            className="flex justify-center items-center bg-slate-800 text-white hover:bg-slate-900 w-full p-1 rounded-full mt-4 text-xl cursor-pointer"
        >
            <IoMdLogIn/> {isSubmitting?<BeatLoader color="#36d7b7" size={14} />: "Login"}
        </button>
        <div className="flex justify-center items-center gap-6 mt-6">
            <div className="flex justify-center items-center border border-blue-100 hover:border-blue-200 rounded px-4 py-2 cursor-pointer">
                <FcGoogle className="text-4xl"/>
            </div>
            <div className="flex justify-center items-center border border-slate-100 hover:border-slate-200 rounded px-4 py-2 cursor-pointer">
                <FaGithub className="text-4xl"/>
            </div>
        </div>
    </form>
  )
}
