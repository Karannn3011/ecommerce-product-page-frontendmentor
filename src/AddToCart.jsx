import { useState } from "react";
export function AddToCart(props) {
  const [items, setItems] = useState(0);



  return (
    <>
      <div className="flex flex-row border-px py-4 px-3 w-[90%] mx-auto justify-between items-center bg-grayish-blue/40 rounded-lg">
        <button>
          <img
            onClick={props.dec}
            className="w-[20px]"
            src="./src/assets/icon-minus.svg"
            alt="minus"
          />
        </button>
        <p className="font-bold text-lg ">{props.items}</p>
        <button>
          <img
          onClick={props.inc}
            className="w-[20px]"
            src="./src/assets/icon-plus.svg"
            alt="plus"
          />
        </button>
      </div>
      <button
        onClick={() => {setItems(props.items)
            props.setCartShown(true)
        }}
        className="flex  bg-orange w-[90%] mx-auto items-center justify-evenly px-20 rounded-lg mt-4 py-4"
      > <div className="flex items-center gap-x-4">
        <img src="./src/assets/icon-cart.svg" alt="cart" />
        <p className="font-semibold text-black/50">Add to cart</p>
        </div>
      </button>
    </>
  );
}

export default AddToCart;