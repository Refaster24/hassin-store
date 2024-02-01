"use client"
import Image from 'next/image'
import { product } from '@/type'
import dynamic from 'next/dynamic'

const AddToCart = dynamic(() => import('./add-to-cart'), {
  ssr: false,
  loading: () => (
  <div>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
  )
})

export default function Product({data}:{ data: product}){

  return(
    <div className="flex px-4 rounded-lg my-4">
        <Image src={data.img} alt={data.name} width={100} height={10} className="ml-2"/>
        <div className="self-center flex justify-between w-full text-sm">
          <div className=''>
            <h2 className="font-9 font-bold m-0 mb-2">{data.name}</h2>
            <span>{data.price} kd</span>
          </div>

          <AddToCart data={data}/>
        </div>
      </div>
  )
}