import {create} from "zustand";
import { products } from "../data/product";
interface CartItem {
  id: number;
  name: string;
  price: number;
  type: string;
  imagen: string;
  amount? : number | undefined;
}

interface CartStore {
  cart: CartItem[],
  addToCart : (id : number) => void ,
  removeFromCart : (id : number) => void
  clearCart : () => void
}

export const useCartStore = create<CartStore>((set , get) => ({

  cart : [
    {
      id : 2,
      name: "Teclado",
      price: 19.99,
      type: "keyboard",
      imagen: "../../img/teclado.png"
    },
    {
      id : 3,
      name: "ps4",
      price: 300.99,
      type: "ps4",
      imagen: "../../img/ps4.png"
    },
    {
      id : 4,
      name: "lexma G88",
      price: 500,
      type: "Lexma",
      imagen: "../../img/vision_2.png"
    },
    {
      id : 5,
      name: "mando play 2",
      price: 10,
      type: "play 2",
      imagen: "../../img/mandoplay.png"
    },
    {
      id : 6,
      name: "nintendo",
      price: 500,
      type: "nintendo",
      imagen: "../../img/nintendo.png"
    },
    {
      id : 7,
      name: "portatil",
      price: 700,
      type: "portatil",
      imagen: "../../img/portatil.png"
    },
    {
      id : 8,
      name: "audífonos",
      price: 700,
      type: "audífonos",
      imagen: "../../img/audifonos.png"
    },
  ],

  addToCart: (id: number) => {
    const newProduct = products.find((product) => id === product.id);
    const productInCart = get().cart.find((product) => id === product.id);
    
    if (productInCart) {
      const updatedCart = get().cart.map((product) =>
        product.id === id ? { ...product, amount: (product.amount ?? 0) + 1 } : product
      );
      set({ cart: updatedCart });
    } else {
      if (newProduct) {
        const product = {...newProduct , amout : 1}
        set((state) => ({
          ...state,
          cart: [...state.cart, product],
        }));
      }
    }
  },

  removeFromCart: (id: number) => {
    set((state) => ({
      ...state,
      cart: state.cart.filter((product) => product.id !== id),
    }));
  },

  clearCart : () => {
   set({cart : []})
  },

  
}));


