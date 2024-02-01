"use client"
import { useCartStore } from "@/store/cart"
import dynamic from "next/dynamic"
import Link from "next/link"
import CartLoadnigButton from "./loading/cart-button"

const InCart = dynamic(() => import('./in-cart'), {
  ssr: false,
  loading: () => <p>gg</p>
})

export default function Cart(){

  const numberOfPurchases = useCartStore(state =>{
      const cart = document.getElementById('cart')
      const button = document.getElementById('button')
      if(state.products.length > 0){
        button?.classList.add('bg-7')
        button?.classList.remove('bg-8')
      } else{
        button?.classList.add('bg-8')
        button?.classList.remove('bg-7')
        cart?.classList.remove('cart');
        cart?.classList.add('translate-y-[24em]')
      }
      return state.products
    })
    function cartHandler(){
      const cart = document.getElementById('cart')
      if(numberOfPurchases.length === 0) {
        return null
      }
      if(cart?.classList.contains('translate-y-[24em]')) {
        cart?.classList.remove('translate-y-[24em]')
        cart?.classList.add('cart');
      }
      else {
        cart?.classList.remove('cart');
        cart?.classList.add('translate-y-[24em]')
      }
  }


    return(
        <section id="cart" className='max-w-md w-full fixed bottom-0 bg-5 translate-y-[24em]'>
        <div className="bg-9 font-5 text-center text-2xl py-2 rounded-t-3xl">
          <button onClick={cartHandler} id="button" className="w-3/4 bg-8 font-5 px-2 py-1 rounded-lg my-2">المشتريات {`(${numberOfPurchases.length})`}</button>
        </div>
        <div>
          <div className="h-80 overflow-y-scroll">
            {
              numberOfPurchases.map((data,id) => {
                if(data.id === undefined) return null
                return (
                  <div key={id}>
                    <InCart data={data}/>
                  </div>
                )
              })
            }
          </div>
          <div className="bg-9 font-5 text-center text-2xl py-2 rounded-t-3xl">
            <Link href={'/payment'}><button className="w-3/4 bg-7 font-5 px-2 py-1 rounded-lg mt-2">شراء سريع</button></Link>
          </div>
        </div>
      </section>
    )
}