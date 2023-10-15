import { useProductsStore } from "../../store/ProductsStore";
export const Prueba = () => {
  const products = useProductsStore((state) => state.products);
  const filters = useProductsStore((state) => state.filters);
  return (
    <section className="px-3 py-4">
      <h2 className="text-2xl font-bold pb-7">Products</h2>
      <div className="w-full pb-20">
        <ul className="flex flex-wrap justify-between gap-y-6 gap-x-2">
          {products.map(({ id, imagen, name, price, type }) => (
           <div>
            {name}
           </div>
          ))}
        </ul>
      </div>
      <button onClick={()=> filters("mouse")}>
         cambiar 
      </button>
    </section>
  );
};
