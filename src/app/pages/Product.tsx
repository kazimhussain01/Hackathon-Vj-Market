import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/utils/mock";

const product = () =>{
    const ProductChecks = ProductCard.slice(0,3);
    return(
        <div className="py-16 lg:px-20 sm:px-5">
            
            {/* Heading */}
            <div className="text-center">
              <p className="text-blue-800 text-lg font-extrabold">PRODUCTS</p>
              <h3 className="text-4xl text-gray-800 font-bold py-8">Check What We Have</h3> 
            </div>

            {/* Product Map*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center lg:px-20 py-4">
                {ProductChecks.map((product) => {
                    return(
                        <div key={product.id}>
                            <Link href={`/components/productdetails/${product.id}`}>
                            <Image className="transform hover:scale-90 ease-in-out duration-300" src={product.Image} 
                            alt="product1"
                            width={380}
                            height={380}
                            />
                            </Link>
                            <h6 className="text-[1.3rem] font-bold">{product.productname}</h6>
                            <h6 className="text-lg font-semibold -mt-1">{product.producttype}</h6>
                            <h6 className="text-[1.4rem] font-bold py-2">{product.price}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default product;