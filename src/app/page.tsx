"use client"
import Cart from "@/component/coal/cart";
import Product from "@/component/coal/product";
import { products } from "@/db/products";
import { useCartStore } from "@/store/cart";

// window.localStorage.clear()

export default function Home() {
  
  const setProduct = useCartStore((state => state.setProduct))
    const localStorage = window.localStorage;

    // default state
    if(localStorage.length !== 0 && useCartStore((state => state.products)).length === 0) {
      const product = []
      Object.keys(localStorage).forEach(key => {
        product.push(JSON.parse(localStorage.getItem(key)));
      });
      setProduct(product)
    }
      // 
  return (
  <>
    <main className="w-full max-w-md mb-20 relative">
    <h1 className="bg-9 font-5 text-center text-2xl mb-4 py-2 rounded-b-3xl">
      Hussen coal
    </h1>
    
      {products.map((product) => {
        return <Product data={product}/>
      })
      }

      <Cart/>
    </main>
  </>
  )
}
