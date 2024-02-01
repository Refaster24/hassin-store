"use client"
import CartLoadnigButton from "@/components/loading/cart-button";
import Product from "@/components/product";
import { products } from "@/db/products";
// import { useCartStore } from "@/store/cart";
// import { useEffect } from "react";
import dynamic from "next/dynamic";

// window.localStorage.clear()

const Cart = dynamic(() => import('@/components/cart'), {
  ssr: false,
  loading: () => <CartLoadnigButton/>
})

const DefaultState = dynamic(() => import('@/components/default-state'), {
  ssr: false,
})

export default function Home() {

  return (
  <>
    <main className="w-full max-w-md mb-20 relative">
    <h1 className="bg-9 font-5 text-center text-2xl mb-4 py-2 rounded-b-3xl">
      Hussen coal
    </h1>
    <section>
      {products.map((product,id) => {
        return (
          <div key={id}>
            <Product data={product}/>
          </div>
          )
        })
      }
    </section>

      <Cart/>
      <DefaultState/>
    </main>
  </>
  )
}
