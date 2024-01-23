"use client"
import CustomerInformation from '@/components/payment/customer-information'
import FilterFactors from '@/components/payment/filterFactors'
import { useCartStore } from '@/store/cart'
import dynamic from 'next/dynamic'

const InCart = dynamic(() => import('@/components/payment/in-cart'), {
    ssr: false,
    loading: () => <p>gg</p>
})

const DefaultState = dynamic(() => import('@/components/default-state'), {
  ssr: false,
  loading: () => <p>gg</p>
})

export default function Payment(){
  const products = useCartStore().products


    return (
    <main className="w-full max-w-md relative">
      <div className='flex flex-wrap'>
      {products.map((product,id) => {
        console.log(product.id)
        if(product.id === undefined) return null
        return (
          <div key={id}>
            <InCart data={product}/>
          </div>
          )
        })
      }
      </div>
      
      <CustomerInformation/>
      <DefaultState/>
    </main>
    )
}