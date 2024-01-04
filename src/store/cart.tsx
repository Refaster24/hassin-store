import { product } from "@/type";
import { create } from "zustand";

type store = {
    products: [] | product[],
    setProduct: (data:product[]) => void
}

export const useCartStore = create<store>((set) => ({
    products:[],
    setProduct: (data:product[]) => set((store)=>({products:data}))
}))