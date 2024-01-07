"use client"
import Image from 'next/image'
import { product } from '@/type'
import dynamic from 'next/dynamic'

const AddToCart = dynamic(() => import('../coal/add-to-cart'), {
  ssr: false,
  loading: () => <p>gg</p>
})

export default function Product({data}:{ data: product}){

  return(
    <div className="flex flex-row-reverse px-4 rounded-lg my-4">
        <Image src={data.img} alt={data.name} width={112} height={10} className="ml-2"/>
        <div className="self-center flex flex-row-reverse justify-between w-full">
          <div className='text-end'>
            <h2 className="font-9 font-bold mb-2">{data.name}</h2>
            <span className="text-sm">{data.price} kd</span>
          </div>

          <AddToCart data={data}/>
        </div>
      </div>
  )
}