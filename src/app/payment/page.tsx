"use client"
import CustomerInformation from '@/components/payment/customer-information'
import { useCartStore } from '@/store/cart'
import dynamic from 'next/dynamic'

const InCart = dynamic(() => import('@/components/payment/in-cart'), {
    ssr: false,
    loading: () => (
      <div>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      )
})

const DefaultState = dynamic(() => import('@/components/default-state'), {
  ssr: false,
  loading: () => <p>gg</p>
})

export default function Payment(){
  const products = useCartStore().products


  return (
  <main className="w-full max-w-md relative">
    <h1 className="bg-9 font-5 text-center text-2xl mb-4 py-2 rounded-b-3xl">
      Hussen coal
    </h1>
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