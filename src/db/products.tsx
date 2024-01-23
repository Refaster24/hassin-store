import { product } from "@/type";
import img1 from '@/assets/product-img/image Product (1).png'
import img2 from '@/assets/product-img/image Product (2).png'
import img3 from '@/assets/product-img/image Product (3).png'
import img4 from '@/assets/product-img/image Product (4).png'
import img5 from '@/assets/product-img/image Product (5).png'
import img6 from '@/assets/product-img/image Product (7).png'



export const products : product[] = [
    {
        id:1,
        name:'منتج رقم 1',
        price:21,
        img: img1,
        amount:1
    },
    {
        id:2,
        name:'منتج رقم 2',
        price:31,
        img:img2,
        amount:1
    },
    {
        id:3,
        name:'منتج رقم 3',
        price:24,
        img:img3,
        amount:1
    },
    {
        id:4,
        name:'منتج رقم 4',
        price:11,
        img:img4,
        amount:1
    },{
        id:5,
        name:'منتج رقم 5',
        price:22,
        img:img5,
        amount:1
    },{
        id:6,
        name:'منتج رقم 6',
        price:23,
        img:img6,
        amount:1
    }
]