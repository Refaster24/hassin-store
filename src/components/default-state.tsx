import { useCartStore } from "@/store/cart";
import { product } from "@/type";
import { useEffect } from "react";

export default function DefaultState() {
    
    const setProduct = useCartStore().setProduct
    console.log(useCartStore().products.length)
    const localStorage = window.localStorage;
    if(localStorage.length !== 0 && useCartStore.getState().products.length === 0) {
    const products = [] as any
    Object.keys(localStorage).forEach(key => {
        const product = JSON.parse(localStorage.getItem(key) as any) as product
        if(product.price != undefined){
            products.push(product);
        }
    });

    setProduct(products)
    }

    useEffect(()=>{
        const button = document.getElementById('button')
        button?.classList.remove('bg-8')
        button?.classList.add('bg-7')
    },[])

    return <div></div>
}