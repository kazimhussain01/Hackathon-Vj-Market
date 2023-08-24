import Link from "next/link"
import Image from "next/image"
import featureimage from "/public/assets/feature.webp"
import { Button } from "@/component/ui/button"

const Jewellery = () => {
  return (
    <div className="px-4 lg:px-20 text-gray-800">
        {/* top */}
        <div className="flex justify-start md:justify-center lg:justify-end text-5xl tracking-wide md:text-6xl font-bold py-4 px-2 lg:px-16">
            <h6 className="md:max-w-[36rem] lg:max-w-[37rem] text-black/90">Unique and Authentic Vintage Designer Jewellery</h6>  
        </div>
        
        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between py-4 mt-2">
        
        {/* left */}
        <div className="relative basis-1/2 grid gap-3 lg:gap-2 grid-cols-2 grid-rows-2">
            <div className="absolute py-4 text-gray-200 inset-0 -z-50 flex md:flex-col">
                <h6 className="text-7xl max-w-xl lg:text-[7.3rem] leading[5.9rem] font-bold">Different from other</h6>
            </div>
        <div className="max-w-[15rem] space-y-2">
            <h6 className="font-bold text-2xl">Using Good Quality Materials</h6>
            <p className="text-lg lg:text-xl leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="max-w-[19rem] space-y-2">
            <h6 className="font-bold text-2xl">100% Handmade Products</h6>
            <p className="text-lg lg:text-xl leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="max-w-[19rem] space-y-2">
            <h6 className="font-bold text-2xl">Discount for Bulk Product</h6>
            <p className="text-lg lg:text-xl leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="max-w-[19rem] space-y-2">
            <h6 className="font-bold text-2xl">Discount for Bulk Orders</h6>
            <p className="text-lg lg:text-xl leading-5">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        </div>


        {/* right */}
            <div className="flex flex-col lg:flex-row basis-1/2">
                <div>
                    <Image className="w-full lg:w-96" src={featureimage} alt="featureimage"></Image>
                </div>
                <div className="p-6 space-y-4 lg:space-y-0 md:space-y-[-10]">
                    <p style={{wordSpacing: '0.8rem'}} className="h-[95%] lg:max-w-[16rem] text-lg font-semibold">
                        This Piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <Link href={"/components/allproduct"}>
                    <Button>See All Product</Button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Jewellery
