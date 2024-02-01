"use client"
import Image from 'next/image'
import { product } from '@/type'


export default function InCart({data}:{ data: product}){
    
  return(
    <div className="flex px-4 rounded-lg my-4">
        <Image src={data.img} alt={data.name} width={112} height={10} className="ml-2"/>
        <div className="self-center flex justify-between w-full">
          <div className='text-end m-2'>
            <h2 className="font-9 font-bold m-0">{data.name}</h2>
            <p className="text-sm">{data.price} kd</p>
            <p className="text-sm">{data.amount + 'x'}</p>
          </div>
        </div>
      </div>
  )
}