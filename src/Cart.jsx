export default function Cart(props) {
  return (
    <>
      <div
        className={`min-h-[200px] z-5 w-[90%] bg-white  absolute left-1/2 -translate-x-1/2 rounded-lg transition-transform duration-150 shadow-lg ${
          props.isCartShown ? "translate-y-[10px]" : "-translate-y-[300px]"
        }`}
      >
        <h1 className="font-bold text-lg p-4">Cart</h1>
        <hr className="text-light-grayish-blue" />

        {props.items != 0 ? (
          <div>
            <div className="p-4 flex flex-row justify-around items-center">
              <div className="w-[45px]">
                <img
                  className="rounded-lg"
                  src="src/assets/image-product-1-thumbnail.jpg"
                  alt="thumb"
                />
              </div>
              <div className="flex flex-col justify-between text-dark-grayish-blue text-sm">
                <h1>Fall Limited Edition Sneakers</h1>
                <h1 className="text-sm">
                  $125.00 x {props.items}
                  <span className="font-bold text-lg ml-2">
                    ${125.0 * props.items}.00
                  </span>
                </h1>
              </div>
              <div>
                <img
                  onClick={() => {
                    props.setItems(0);
                    console.log(props.items);
                  }}
                  src="src/assets/icon-delete.svg"
                  alt="delete"
                />
              </div>
            </div>
            <div className="px-4 pt-3 pb-5">
              <button className="bg-orange p-3 w-[100%] rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex">
            <p className="mx-auto my-10 text-dark-grayish-blue font-bold">
              Your cart is empty.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
