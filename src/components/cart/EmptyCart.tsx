

export const EmptyCart = () => {
  return (
    <div className="flex justify-center items-center flex-col">
        <div>
         <img src="../../../img/emptycart.svg" alt="" className="h-full w-full"/>
        </div>
        <div>
            <p className="text-xl font-semibold">There are no products in the cart </p>
        </div>
    </div>
  )
}
