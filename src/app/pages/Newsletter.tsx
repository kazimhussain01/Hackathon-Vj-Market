import Link from "next/link"
import Image from "next/image"
import { Input } from "@/component/ui/input"
import { Button } from "@/component/ui/button"


const Newsletter = () => {
    return (
        <div className="space-y-3 lg:space-y-5 flex flex-col h-[60vh] justify-center items-center text-gray-800 p-4">
            <div className="absolute text-gray-200 -z-50">
                <h6 className="text-7xl lg:text-9xl font-bold">Newsletter</h6>
            </div>
            <h6 className="text-5xl text-center md:text-5xl font-bold">Subscribe Our Newsletter</h6>
            <p className="max-w-[24rem] lg:max-w-full text-center text-xl">Get the latest information and promo offers directly</p>
            <div className="flex flex-wrap items-center justify-center space-y-4 md:space-y-0 lg:space-y-0 space-x-5">
            <Input className="lg:w-96 h-12 flex flex-row shadow-lg shadow-lime-400 cursor-pointer"
                type="email" placeholder="Enter your Email Adress">
            </Input>
            <div className="md:py-2">
            <Button>Get Started</Button>
            </div>
        </div>
        </div>
    )
}

export default Newsletter
   