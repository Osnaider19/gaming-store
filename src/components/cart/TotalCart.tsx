import { useCartStore } from "../../store/cartStore";
interface CartItem {
  id: number;
  name: string;
  price: number;
  type: string;
  imagen: string;
  amount?: number | undefined;
}

export const TotalCart = () => {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.price * (item.amount || 1);
  }, 0);
 
  return (
    <div className="relative w-full h-[20vh] ">
      <div className="px-4 bg-[#181818]">
        {cart.length > 0 && (
          <div>
            <p className="font-semibold text-xl">Total: ${total}</p>
          </div>
        )}
      </div>
    </div>
  );
};
