import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/utils/mock";

const AllProduct = ()=> {
    return(
            <div className="py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center lg:px-20">
                    {ProductCard.map((product) => {
                        return(
                            <div key={product.id}>
                                <Link href={`/components/productdetails/${product.id}`}>
                                <Image className="transform hover:scale-90 ease-in-out duration-300 w-80 h-[22rem] mt-4" src={product.Image} 
                                alt="product1"
                                width={360}
                                height={360}
                                />
                                </Link>
                                <h6 className="text-[1.3rem] font-bold">{product.productname}</h6>
                                <h6 className="text-xl font-semibold -mt-1 text-gray-400">{product.producttype}</h6>
                                <h6 className="text-[1.4rem] font-bold">{product.price}</h6>
                                <h1 className="py-10 -mt-20"></h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

export default AllProduct;