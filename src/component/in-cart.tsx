"use client"
import Image from 'next/image'
import { product } from '@/type'
import { useCartStore } from '@/store/cart'


export default function InCart({data}:{ data: product}){
    const setProduct = useCartStore((state => state.setProduct))
    const localStorage = window.localStorage;

    function plus(){
        data.amount++
        localStorage.setItem(data.name,JSON.stringify(data));
        const product  = [] as any
        Object.keys(localStorage).forEach(key => {
        product.push(JSON.parse(localStorage.getItem(key) as any))
        });
        setProduct(product)
    }

    function minus(){
        data.amount--
        if(data.amount === 0){
            localStorage.removeItem(data.name);
        } else{
            localStorage.setItem(data.name,JSON.stringify(data));
        }
        const product  = [] as any
        Object.keys(localStorage).forEach(key => {
        product.push(JSON.parse(localStorage.getItem(key) as any))
        });
        setProduct(product)
    }
    
  return(
    <div className="flex flex-row-reverse px-4 rounded-lg my-4">
        <Image src={data.img} alt={data.name} width={112} height={10} className="ml-2"/>
        <div className="self-center flex flex-row-reverse justify-between w-full">
          <div className='text-end'>
            <h2 className="font-9 font-bold mb-2">{data.name}</h2>
            <span className="text-sm">{data.price} kd</span>
          </div>

          <div className="flex flex-row-reverse items-center gap-2 justify-center">
              <button>
                <svg onClick={minus} className='border rounded-full border-9' xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none">
                  <path d="M6 12L18 12" stroke="#181D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span>{data.amount}</span>
              <button>
                <svg onClick={plus} className='border rounded-full border-9' xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20M12 4V20" stroke="#181D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
        </div>
      </div>
  )
}