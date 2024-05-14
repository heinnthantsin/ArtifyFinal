import React, { useEffect, useState } from "react";
import Button from "../util/Button";
import { useCartStore } from "../../store/cart-store";

// const quantityController = (qty) => {
//     const [inputQty, SetInputQty] = useState(qty);
//     useEffect(() => {
//         SetInputQty(qty)
//     }, [inputQty])
//     return (
//         <>

//         </>)
// }

function Cart({ item }) {
  const cartStore = useCartStore();
  //   const [qty, setQty] = useState(item.quantity);

  //   useEffect(() => {
  //     cartStore.replacedItem({
  //       ...item,
  //       quantity: item.quantity,
  //     });
  //   }, [qty]);

  return (
    <>
      <div className="relative bg-gray-300 p-1 rounded-md my-1 flex justify-start gap-2 items-start w-full h-full">
        <div className="w-[80px] h-[80px]">
          <img
            src={item.img}
            className="min-w-[80px] h-[80px] object-cover rounded-md"
          />
        </div>
        <div className="text-[0.8rem]">
          <h1>{item.productName}</h1>
          <p>Price: ${item.price}</p>
          <button
            className="absolute botton-0 end-0 m-1    hover:bg-gray-100 p-1 rounded-full cursor-pointer"
            onClick={() => cartStore.removeCartItem(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              color="#00000"
              fill="none"
            >
              <path
                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M9.5 16.5L9.5 10.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M14.5 16.5L14.5 10.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
          {/* {item.isHandcraft && (
            <>
              <Button customeClass={""} buttonName={"-"} />
              <input type="text" value={qty} onChange={(val) => setQty(val)} />
              <Button customeClass={""} buttonName={"+"} />
            </>
          )} */}
        </div>
      </div>
    </>
  );
}

export default Cart;
