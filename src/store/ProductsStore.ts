import {create} from "zustand"
import { products } from "../data/product"
import { type ProductTypes } from "../types/types"

interface ProductsStore {
 products : ProductTypes[],
 filters : (value : string)=> void ,
 
 }
export const useProductsStore = create<ProductsStore>((set , get) => ({

 products : products,   
 filters(value) {
     const leakedProducts = get().products.filter((product) => value === product.categories)
     set({products : leakedProducts})
 },
})) 