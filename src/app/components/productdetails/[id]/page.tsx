import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/utils/mock";
import Quantity from "@/app/functionalComponents/Quantity";
import AddtoCart from "@/app/functionalComponents/AddToCart";


const getProductDetail = (id: number) => {
    return ProductCard.filter((Product)=> Product.id == id)
}

export default function Page({ params }: {params: {id: number} }){
    const result = getProductDetail(params.id)
     
    {/* Sizes */}
    const Sizes = ["xs", "s", "m", "l", "xl"]
    
  return(
    <div className="px-5 md:px-10 py-10 mt-10 lg:px-12 justify-between bg-gray-50">
      {result.map((product) => {
        return(
          <div>
          <div key={product.id} className="lg:flex md:flex gap-6">

    {/* Left Image */}
      <div className="p-3">
        <Image className="lg:ml-32 rounded-2xl lg:w-[42rem] lg:h-[44rem] md:h-[22rem] md:w-[21rem] w-[30rem] h-[22rem]" src={product.Image} alt={product.productname}
        width={500}
        height={500} />
      </div>

    {/* Right Text */}
      <div className="px-5 md:px-0">
        <h1 className="text-3xl font-sarif font-medium max-w-md lg:mt-20 mt-8">{product.productname}</h1>
        <h2 className="text-2xl text-gray-400 font-sarif font-semibold">{product.producttype}</h2>

    {/* Sizes */}
      <h3 className="text-md font-bold ml-1 mt-14">SELECT SIZE</h3>
        <div className="flex gap-6">
        {Sizes.map((Sizes) => {
          return(
            <div className="flex items-center justify-center cursor-pointer hover:bg-black hover:text-white bg-gray-200 rounded-full lg:h-14 lg:w-14 md:h-12 md:w-12 mt-3 h-10 w-10">
              <span className="lg:text-2xl md:text-2xl text-xl font-medium font-sans uppercase">{Sizes}</span>
        </div>
       )
      })}
       </div>

    {/* Quantity */}
      <div>
        <Quantity/>
      </div>

    {/* Total */}
      <div className="mt-11 flex items-center">
        <h1 className="text-xl font-semibold font-sans">Total:</h1>
        <div className="text-2xl font-semibold ml-8">{product.price}</div>
      </div>

    {/* Button */}
      <AddtoCart/>
     </div>
    </div>  

   {/* Bottom Content */}
    <div className="bg-white lg:m-7 lg:h-[34rem] h-[55rem] md:h-[43rem]">
      <div className="relative mt-12 py-20 px-2 border-b-2 border-gray-400">
        <h2 className="top-0 m-5 p-6 lg:ml-10 absolute lg:text-[7rem] text-6xl font-bold text-gray-100 text-center mx-auto">Overview</h2>
        <p className="absolute lg:-m-0 lg:mt-1 -mt-7 whitespace-nowrap lg:ml-[3.8rem] px-2 items-center font-bold lg:text-3xl text-[1.80rem] m-3">Product Information</p>
      </div>
      <div className="text-gray-600">

        {/* Product Details */}
        <div className="flex justify-between py-4 px-8 lg:px-[3.7rem] lg:mt-6 mt-4">
          <h3 className="font-semibold text-lg whitespace-nowrap">PRODUCT DETAILS</h3>
          <p className="lg:ml-[22rem] mt-16 lg:mt-0 -ml-[10.50rem] tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        {/* Product Care */}
        <div className="flex py-4 px-[3.7rem] lg:mt-6 mt-3">
        <h4 className="font-semibold -ml-[1.6rem] lg:ml-1 text-lg whitespace-nowrap">PRODUCT CARE</h4>
          <ul className="lg:ml-[24.5rem] mt-16 lg:mt-0 -ml-[7.70rem] whitespace-nowrap space-y-3 list-disc tracking-wider text-gray-900 font-semibold">
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
          </ul>
        </div>
      </div>
    </div>
   </div>
)
})}
</div>
  );
}