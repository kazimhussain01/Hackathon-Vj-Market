import Image from 'next/image'
import Hero from './pages/Hero'
import Promotion from './pages/Promotion'
import Jewellery from './pages/Jewellery'
import Newsletter from "./pages/Newsletter"
import Product from './pages/Product'
import { Button } from '@/component/ui/button'

export default function(){
  
  return(
    <div>
      <Hero />
      <Promotion />
      <Product />
      <Jewellery />
      <Newsletter />
    </div>
  )
}