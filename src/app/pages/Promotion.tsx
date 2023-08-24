import Image from "next/image";
import promotionimage1 from "/public/assets/promotion1.webp"
import promotionimage2 from "/public/assets/promotion2.webp"
import promotionimage3 from "/public/assets/promotion3.webp"
import { Button } from "@/component/ui/button";

const Promotion = () => {
  return (
    <div className="py-16 lg:px-20 sm:px-5">

        {/* Heading */}
        <div className="text-center">
        <p className="text-blue-800 text-lg font-extrabold">PROMOTIONS</p>
        <h3 className="text-4xl text-gray-800 font-bold py-8">Our Promotions Events</h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6 text-gray-800">
            
            {/* First Grid */}
            <div className="w-full flex flex-col items-center justify-between sm:flex-row col-span-1 md:col-span-2 bg-[#D6D6D8] lg:px-4 md:px-10">
            <div className="max-w-[10rem]">
            <p className="text-4xl font-bold sm:ml-5">GET UP TO
            <span className="font-extrabold"> 60%</span>
            </p>
            <p className="text-lg font-medium sm:ml-5 flex">For the summer season</p>    
            </div> 
            <div> 
                <Image className="lg:w-[30rem] lg:h-[24rem]" src={promotionimage1} alt="promotionimage1"></Image>
            </div>
            </div>

            {/* Second Grid */}            
            <div className="w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-[#EFE1C7]">
                
                {/* Text */}
                <div className="md:p-12 text-2xl">
                    <p>Flex Sweatshirt</p>
                    <p>
                      <del>$100.00</del>
                      &nbsp;&nbsp;
                      <b>
                        $75.00
                      </b>
                    </p>
                </div>
                
                {/* Image */}
                <div>
                    <Image className="md:mt-16 w-96 h-[26rem]" src={promotionimage2} alt="promotionimage2"></Image>
                </div>
            </div>

            {/* Third Grid */}
            <div className="w-full row-span-2 flex flex-col items-center h-full bg-[#D7D7D9]">
                
                {/* Text */}
                <div className="md:py-12 text-2xl">
                    <p>Flex Push Button Bomber</p>
                    <p>
                      <del>$225.00</del>
                      &nbsp;&nbsp;
                      <b>
                        $190.00
                      </b>
                    </p>
                </div>
                
                {/* Image */}
                <div className="mt-2">
                    <Image className="md:mt-14 w-96 h-[26rem]" src={promotionimage3} alt="promotionimage3"></Image>
                </div>
            </div>
            
            {/* Fourth Grid */  }
            <div className="py-9 text-white w-full col-auto md:col-span-2 bg-[#212121] flex flex-col justify-cnter items-center">
                <h3 className="font-bold mt-3 text-5xl">GET 30% Off</h3>
                <p className="leading-7 text-lg [&:not(:first-child)]:mt-4">USE PROMO CODE</p>
                <Button variant={"destructive"} className="bg-gray-600 px-4 mt-2 text-2xl tracking-widest">DINEWEEKENDSALE</Button>
            </div>
        </div>
    </div>
  )
}

export default Promotion;