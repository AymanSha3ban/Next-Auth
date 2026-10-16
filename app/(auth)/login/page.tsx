import Link from "next/link";
import LoginForm from "../_components/LoginForm";

export default function page() {
  return (
    <section>
        <div className="shadow-md rounded-md bg-white p-10">
            <h1 className="font-bold text-2xl text-slate-700 mb-5">
                Sign in to your account 
            </h1>
            <LoginForm/>
            <p className="p-1 mt-3">
                Do you have account ?
                <Link href={"/register"} className="underline text-blue-600 mx-1">Register</Link>
            </p>
        </div>
    </section>
  )
}
