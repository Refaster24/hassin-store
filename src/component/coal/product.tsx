"use client"
import Image from 'next/image'
import { useState } from 'react'
import { product } from '@/type'
import { useCartStore } from '@/store/cart'

export default function Product({data}:{ data: product}){

  function AddToCart(){
    const [amount,setAmount] = useState(1)

    function plus(){
        setAmount(()=> amount + 1)
    }

    function minus(){
        if(amount > 1) setAmount(()=> amount - 1)
    }
    
    const setProduct = useCartStore((state => state.setProduct))
    const localStorage = window.localStorage;

    const addToCart = () => {
      localStorage.setItem(data.name,JSON.stringify([data,amount]));
      const product = []
      Object.keys(localStorage).forEach(key => {
        product.push(JSON.parse(localStorage.getItem(key)));
      });
      setProduct(product)
    }

    return(
        <div>
            <div className="flex flex-row-reverse items-center gap-2 justify-center">
              <button>
                <svg onClick={minus} className='border rounded-full border-9' xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none">
                  <path d="M6 12L18 12" stroke="#181D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <span>{amount}</span>
              <button>
                <svg onClick={plus} className='border rounded-full border-9' xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20M12 4V20" stroke="#181D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <button onClick={addToCart} className="bg-7 font-5 px-2 rounded-lg mt-2">أضف إلى السلة</button>
        </div>
    )
}


  return(
    <div className="flex flex-row-reverse px-4 rounded-lg my-4">
        <Image src={data.img} alt={data.name} width={112} height={10} className="ml-2"/>
        <div className="self-center flex flex-row-reverse justify-between w-full">
          <div className='text-end'>
            <h2 className="font-9 font-bold mb-2">{data.name}</h2>
            <span className="text-sm">{data.price} kd</span>
          </div>

          <AddToCart/>
        </div>
      </div>
  )
}