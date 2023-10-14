import { useCartStore } from "../../store/cartStore";
import { EmptyCart } from "./EmptyCart";
import {AiOutlineDelete} from 'react-icons/ai'
export const CartProduct = () => {
  const { cart, removeFromCart } = useCartStore((state) => state);
  return (
    <>
        {cart.length < 1 &&  <EmptyCart/>}
        {cart.length >= 1 && <> {cart.map(({ id, imagen, name, price, amount }) => (
          <div
            className="flex min-h-[102px]  gap-x-3 items-center  rounded-md overflow-hidden bg-[#ffffff20] px-2"
            key={id}
          >
            <div className="max-h-[100px] min-h-[100px]  h-full w-full max-w-[100px] min-w-[100px] flex justify-center items-center">
              <img
                src={imagen}
                alt={name}
                className="w-full h-full object-contain object-center "
              />
            </div>
            <div className="min-w-[47%]   h-full">
              <p className="font-semibold capitalize line-clamp-1">{name}</p>
              <p className="line-clamp-1">${price}</p>
              <p className="line-clamp-1">{amount}</p>
            </div>
            <div className="flex w-full  ">
              <button
                onClick={() => removeFromCart(id)}
                className="rounded-md py-1 px-5 bg-[#A100ED] text-white text-xl"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
       </>
      }
    </>
  );
};
