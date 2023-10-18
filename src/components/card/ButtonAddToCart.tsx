import { useCartStore } from '../../store/cartStore'

export const ButtonAddToCart = ({id } : {id : number}) => {
  const addToCart = useCartStore((state) => state.addToCart)
  //const cart = useCartStore((state) => state.cart)
  return (
    <button className="bg-[#A100ED] py-2 px-4 rounded-md z-10" 
    onClick={()=> addToCart(id)}>
      add to cart
    </button>
  )
}
