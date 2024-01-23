"use client"
import { useState } from 'react'
import { product } from '@/type'
import { useCartStore } from '@/store/cart'

export default function AddToCart({data}:{ data: product}){
    const [amount,setAmount] = useState(1)

    function plus(){
      setAmount(()=> amount + 1)
    }

    function minus(){
      if(amount > 1) setAmount(()=> amount - 1)
    }
    
    const setProduct = useCartStore((state => state.setProduct))
    const localStorage = window.localStorage;

    function addToCartHandler(){
      data.amount+= amount
      localStorage.setItem(data.name,JSON.stringify(data));
      const product  = [] as any
      Object.keys(localStorage).forEach(key => {
        product.push(JSON.parse(localStorage.getItem(key) as any))
      });
      setProduct(product)
    }


    return(
        <div>
            <div className="flex flex-row-reverse items-center gap-2 justify-center">
              <button>
                <svg onClick={minus} className='border rounded-full border-9' xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none">
                  <path d="M6 12L18 12" stroke="#181D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span>{amount}</span>
              <button>
                <svg onClick={plus} className='border rounded-full border-9' xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20M12 4V20" stroke="#181D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button onClick={addToCartHandler} className="bg-7 font-5 px-2 rounded-lg mt-2">أضف إلى السلة</button>
        </div>
    )
}