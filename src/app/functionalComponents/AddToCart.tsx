'use client'
import { ShoppingCart } from "lucide-react";
import { Button } from "../../component/ui/button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slice/cartSlice";
import toast from "react-hot-toast"

const AddtoCart = () => {
    const dispatch = useDispatch();
    const AddItem = () => {
        dispatch(cartActions.addToCart({quantity : 1}))
        toast.success("Product Add to Cart")
    }
    return(
        <div className="mt-12 relative">
        <Button onClick={AddItem} className="relative py-3 px-10 font-sarif text-xl hover:bg-gray-700">
        <ShoppingCart className="mr-3"/>Add to Cart
        </Button>
        </div>
    )
}

export default AddtoCart;