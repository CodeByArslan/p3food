import Hero from "./components/layout/Hero";
import Header from "./components/layout/Header";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";


export default function Home() {
  return (
     <>
      
      <Hero/> 
      <HomeMenu/>
      <section className=" text-center">
        <SectionHeaders
         subheader={'Our story'}
         mainHeader={'About us'}
        />
        <p className=" mt-4 text-pretty text-gray-500">
        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
        
        </p>
       
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subheader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className=" mt-2">
          <a className="text-4xl underline text-green-500" href="tel:+4673817389">
          +46 738 345 654
        </a>
        </div>
        
      </section>
      
     </>
  )
}
