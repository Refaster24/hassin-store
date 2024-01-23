import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

export default function DefaultState() {
  
    const setProduct = useCartStore((state => state.setProduct))
    const localStorage = window.localStorage;
    if(localStorage.length !== 0 && useCartStore.getState().products.length === 0) {
    const product = [] as any
    Object.keys(localStorage).forEach(key => {
        product.push(JSON.parse(localStorage.getItem(key) as any));
    });
    
    setProduct(product)
    }

    useEffect(()=>{
        const button = document.getElementById('button')
        button?.classList.remove('bg-8')
        button?.classList.add('bg-7')
        console.log(button)
    },[])

    return <div></div>
}