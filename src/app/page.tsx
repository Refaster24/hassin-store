import Cart from "@/component/coal/cart";
import Product from "@/component/coal/product";


export default function Home() {

  return (
  <>
    <main className="w-full max-w-md mb-20 relative">
    <h1 className="bg-9 font-5 text-center text-2xl mb-4 py-2 rounded-b-3xl">
      Hussen coal
    </h1>
      
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>

      <Cart/>
    </main>
  </>
  )
}
