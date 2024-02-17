import Image from "next/image";
import MenuItem from "../Menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section>
        <div className="absolute left-0 right-0 w-full justify-start">
        <div className=" absolute   left-0 -top-5 text-left -z-10">
            <Image src={'/sallad1.png'} width={109} height={189} alt="sallad"/>
        </div>
        <div className="  absolute -top-24 right-0 ">
            <Image src={'/sallad2.png'} width={107} height={195} alt="sallad"/>
        </div>
        </div>
        
        <div className="text-center mb-2">
      <SectionHeaders subheader={'Check out'}
      mainHeader={'Menu'}/>
    </div>
    <div className="grid grid-cols-3 gap-2 p-10 px-16  pt-29">
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>

    </div>
    </section>
    
  );
}
