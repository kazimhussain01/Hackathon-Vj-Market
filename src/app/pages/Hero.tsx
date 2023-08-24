import React from 'react'
import { Badge } from '@/component/ui/badge';
import { Button } from '@/component/ui/button';
import { ShoppingCart } from "lucide-react"
import heroimage from "/public/assets/hero.webp"
import Image from 'next/image';
import heroimage1 from "/public/assets/hero1.webp"
import heroimage2 from "public/assets/hero2.webp"
import heroimage3 from "public/assets/hero3.webp"
import heroimage4 from "public/assets/hero4.webp"
import Link from 'next/link';



const Hero = () => {
  return (
    <section className='flex flex-col md:flex-col lg:flex-row sm:px-4'>
        
        {/* Left Div */}
        <div className='py-20 flex-1 ml-16'>
            <Badge className='text-xl font-sans font-bold rounded-lg py-2 px-5 bg-blue-200 text-blue-900'>Sale 70%</Badge>
            <h1 className="scroll-m-20 max-w-[35rem] mt-8 text-4xl font-extrabold tracking-tight lg:text-6xl">
                An Industrial Take on Streetwear
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-8 text-xl max-w-[25rem] text-gray-500">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
            <Link href="/components/allproduct">
            <Button className='py-4 px-5 mt-8'> 
                <ShoppingCart className="mr-2 h-7 w-8" />Start Shopping
            </Button>
            </Link>
            <div className='flex gap-12 mt-14 flex-wrap'>
                <Image src={heroimage1} alt='heroimage1'></Image>
                <Image src={heroimage2} alt='heroimage2'></Image>
                <Image src={heroimage3} alt='heroimage3'></Image>
                <Image src={heroimage4} alt='heroimage4'></Image>
            </div>
        </div>

        {/* Right Div*/}
        <div className='rounded-full bg-[#ffece3] lg:h-[575px] lg:w-[610px] md:h-[575px] md:w-[610px] md:ml-16 ml-4 mr-16 lg:mt-4'>
            <Image src={heroimage} alt='hero' height={900}></Image>
        </div>
    </section>
  )
}

export default Hero;
