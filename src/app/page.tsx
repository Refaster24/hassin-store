"use client"
import Product from "@/component/product";
import { products } from "@/db/products";
import { useCartStore } from "@/store/cart";
// import { useEffect } from "react";
import dynamic from "next/dynamic";

// window.localStorage.clear()

const Cart = dynamic(() => import('@/component/cart'), {
  ssr: false,
  loading: () => <p>gg</p>
})

const DefaultState = dynamic(() => import('@/component/default-state'), {
  ssr: false,
  loading: () => <p>gg</p>
})

export default function Home() {
  
  // default state
  // const setProduct = useCartStore((state => state.setProduct))
  
  // useEffect(()=>{
  //   if(typeof window !== 'undefined'){
  //     const localStorage = window.localStorage;
  //     if(localStorage.length !== 0 && useCartStore.getState().products.length === 0) {
  //     const cart = document.getElementById('cart')
  //     const button = document.getElementById('button')
  //     const product = [] as any
  //     Object.keys(localStorage).forEach(key => {
  //       product.push(JSON.parse(localStorage.getItem(key) as any));
  //     });
  //     setProduct(product)
  //     // cart?.classList.remove('translate-y-[24em]')
  //     // cart?.classList.add('cart');
  //     button?.classList.remove('bg-8')
  //     button?.classList.add('bg-7')
  //     console.log('hh')
  //   }
  // }},[])
    // 

  return (
  <>
    <main className="w-full max-w-md mb-20 relative">
    <h1 className="bg-9 font-5 text-center text-2xl mb-4 py-2 rounded-b-3xl">
      Hussen coal
    </h1>
    
      {products.map((product,id) => {
        return (
          <div key={id}>
            <Product data={product}/>
          </div>
          )
        })
      }

      <Cart/>
      <DefaultState/>
    </main>
  </>
  )
}
