"use client"
import Image from 'next/image'
import product from '../../assets/product-img/image Product (1).png'
import { useState } from 'react'

export default function Product(){
    const [amount,setAmount] = useState(1)

  function plus(){
    setAmount(()=> amount + 1)
  }

  function minus(){
    if(amount > 1) setAmount(()=> amount - 1)
  }

  return(
    <div className="flex flex-row-reverse px-4 rounded-lg">
        <Image src={product} alt="" className="w-28 ml-2" />
        <div className="self-center flex flex-row-reverse justify-between w-full">
          <div className="">
            <h2 className="font-9 font-bold mb-2">منتج رقم 1</h2>
            <span className="">12.000 kd</span>
          </div>

          <div className="">
            <div className="flex flex-row-reverse items-center gap-2 justify-center">
            <svg onClick={minus} className='border rounded-full border-9' xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none">
              <path d="M6 12L18 12" stroke="#181D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{amount}</span>
            <svg onClick={plus} className='border rounded-full border-9' xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none">
              <path d="M4 12H20M12 4V20" stroke="#181D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <button className="bg-7 font-5 px-2 rounded-lg mt-2">أضف إلى السلة</button>
          </div>
        </div>
      </div>
  )
}