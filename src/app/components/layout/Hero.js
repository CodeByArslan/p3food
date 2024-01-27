import Image from "next/image";
import Right from "../icons/Right";

export default function Hero(){
    return (
        <section className="hero ">
            <div >
                 <h1 className="text-4xl mt-10 font-semibold">
                Everything<br/>
                is better <br/>
                with a&nbsp;
                <span className="text-primary">Pizza</span> 
            </h1>
            <p className="my-6 text-gray-500 text-sm">
                Pizza is the missing piece that makes every day 
                complete, a simple yet delicious joy in life
            </p>
            <div className="flex gap-3">
                <button className="bg-primary text-white px-4 py-3 rounded-full flex gap-2 ">Order Now<Right/></button>
                <button className="flex gap-2 py-3 textgray-600 font-semibold">Learn more <Right/>
                    
                </button>
            </div>
            </div>
           
            <div className="relative">
            <Image src={'/pizza.png'} layout={'fill'}
            objectFit={'contain'} alt={'pizza'}/>

            </div>
            
        </section>
    )
}