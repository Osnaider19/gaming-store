import { useRef } from 'react';
import { IconCart } from '../../Icons/IconCart'
import { useCartStore } from '../../store/cartStore'

export const ButtonCart = () => {
  const cart = useCartStore((state) => state.cart);
  const refButton = useRef(null);
  const handelClick = () => {
    const cart = document.querySelector("#cart") as HTMLElement 
    cart.classList.toggle("translate-x-[400px]")
  }
  return (
    <button id="button_cart" className='relative' ref={refButton} onClick={handelClick}>
        <IconCart/>
        {cart.length > 0 && <div className='absolute -right-4 -top-2 bg-red-500 rounded-full h-4 w-4 flex justify-center items-center '>{cart.length}</div>}
    </button>
  )
}
