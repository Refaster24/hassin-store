"use client"
import Product from "@/component/coal/product";

export default function Cart(){

    function cart(){
        const cart = document.getElementById('cart')
        if(!cart?.classList.contains('cart')) cart?.classList.add('cart'),cart?.classList.remove('translate-y-[24em]')
        else cart?.classList.remove('cart') ,cart?.classList.add('translate-y-[24em]')
    }

    return(
        <div id="cart" className='max-w-md w-full fixed bottom-0 bg-5 translate-y-[24em]'>
        <div className="bg-9 font-5 text-center text-2xl py-2 rounded-t-3xl">
          <button onClick={cart} className="w-3/4 bg-7 font-5 px-2 py-1 rounded-lg my-2">المشتريات</button>
        </div>
        <div>
          <div className="h-80 overflow-y-scroll">   
            <Product/>
            <Product/>
            <Product/>
          </div>
          <div className="bg-9 font-5 text-center text-2xl py-2 rounded-t-3xl">
            <button className="w-3/4 bg-7 font-5 px-2 py-1 rounded-lg mt-2">شراء سريع</button>
          </div>
        </div>
      </div>
    )
}