'use client'
import { useCartStore } from "@/store/cart";


export default function Price(){
    const products = useCartStore().products
    let price = 0 
    for(let i=0;i<products.length;i++){
        const product = products[i] 
        const value = product.price * product.amount
        price += value
    }

    const totalPrice = price + 3

    return (
        <section className="flex flex-col gap-2 border-y-2 border-9 py-2 m-4">
            <div className="flex items-center justify-between">
                <p>قيمة المشتريات</p>
                <p>{price} kd</p>
            </div>
            <div className="flex items-center justify-between">
                <p>قيمة التوصيل</p>
                <p>3 kd</p>
            </div>
            <div className="flex items-center justify-between">
                <p>الإجمالي</p>
                <p >{totalPrice} kd</p>
            </div>
        </section>
    )
}


// 20  2
// 330  2
// 3  1
// 45  2
// 10  10 = 6936