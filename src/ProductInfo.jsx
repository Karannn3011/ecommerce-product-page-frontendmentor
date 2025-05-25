export default function ProductInfo() {
  return (
    <>
      <div className="w-[90%] mx-auto pt-6 py-4 col-start-2 lg:mt-15">
        <h1 className="text-xs tracking-widest font-bold text-dark-grayish-blue">
          SNEAKER COMPANY
        </h1>
        <h1 className="text-3xl my-3 font-bold">
          Fall Limited Editor Sneakers
        </h1>
        <p className="text-dark-grayish-blue leading-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-row my-4 justify-between items-center">
          <div className="flex flex-row justify-between items-center gap-x-3">
            <h1 className="text-3xl font-semibold">$125.00</h1>
            <span className="bg-black text-white py-1 px-2 text-xs font-bold rounded-lg">
              50%
            </span>
          </div>
          <p className="text-dark-grayish-blue font-bold line-through">
            $250.00
          </p>
        </div>
      </div>
    </>
  );
}
