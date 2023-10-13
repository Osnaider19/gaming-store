import { useCartStore } from "../../store/cartStore";

export const CartProduct = () => {
  const { cart, removeFromCart } = useCartStore((state) => state);
  return (
    <>
      <div className="flex flex-col gap-2 overflow-y-auto  pb-16 p-4">
        {cart.map(({ id, imagen, name, price, amount }) => (
          <div
            className="flex  gap-x-3 items-center border rounded-md overflow-hidden"
            key={id}
          >
            <div className="max-h-[100px] min-h-[100px] h-full w-full max-w-[100px] min-w-[100px] bg-slate-400 flex justify-center items-center">
              <img
                src={imagen}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full">
              <p className="font-semibold text-xl capitalize">{name}</p>
              <p>${price}</p>
              <p>{amount}</p>
            </div>
            <div className="flex w-full justify-end px-4">
              <button
                onClick={() => removeFromCart(id)}
                className="rounded-md py-1 px-3 bg-[#A100ED]"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
