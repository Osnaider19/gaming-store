import {create} from "zustand";
import { products } from "../data/product";
interface CartItem {
  id: number;
  name: string;
  price: number;
  type: string;
  imagen: string;
  amount? : number 
}

interface CartStore {
  cart: CartItem[],
  addToCart : (id : number) => void ,
  removeFromCart : (id : number) => void
}

export const useCartStore = create<CartStore>((set , get) => ({
  addToCart: (id: number) => {
    const newProduct = products.find((product) => id === product.id);
    const productInCart = get().cart.find((product) => id === product.id);
    
    if (productInCart) {
      const updatedCart = get().cart.map((product) =>
        product.id === id ? { ...product, amount: (product.amount ?? 0) + 1 } : product
      );
      set({ cart: updatedCart });
    } else {
      const product = {...newProduct , amout : 1}
      set((state) => ({
        ...state,
        cart: [...state.cart, product],
      }));
    }
  },
  removeFromCart: (id: number) => {
    set((state) => ({
      ...state,
      cart: state.cart.filter((product) => product.id !== id),
    }));
  },
  cart: [],
}));


