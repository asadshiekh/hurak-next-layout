import React from 'react'
import PricingHeader from "@/components/global/PricingHeader";
import ProgressSteps from "@/components/global/ProgressSteps";
import Cart from '@/components/frontend-panel/shop-cart/Cart';
import UpsellingSection from '@/components/global/UpsellingSection';
function page() {
  return (
    <>
         <PricingHeader />
         <ProgressSteps />
         <Cart></Cart>
         <UpsellingSection></UpsellingSection>
    </>
    
  )
}

export default page