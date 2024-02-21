import { Holtwood_One_SC } from "next/font/google";
import Image from "next/image";

export default function RegisterPage(){
    return(
    <section className=" mt-14">
        <h1 className="text-center mb-5 text-primary text-4xl">Register</h1>
        <form className="block max-w-xs mx-auto ">
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button className="S1" type="submit">Register</button>
            <div className=" my-4 text-center text-gray-500">
                or Login With Provider
            </div>
            <button className="flex gap-4 justify-center">
                <Image  src={"/G Logo.png"} alt=""
                width={32} height={32}/>
                Login with Google</button>
        </form>
        
        
        
        </section>
    
    
    
    );
}