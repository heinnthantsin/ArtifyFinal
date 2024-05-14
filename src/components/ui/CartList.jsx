import React, { useState } from "react";
import Cart from "./Cart";
import Button from "../util/Button";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart-store";

function CartList({ isCartOpen, setIsCardOpen }) {
  const cartStore = useCartStore();
  return (
    <>
      {isCartOpen && (
        <div
          className="fixed h-screen w-screen backdrop-blur-sm top-0 right-0 z-40"
          onClick={() => setIsCardOpen(false)}
        ></div>
      )}

      {/* cart list - drawer */}
      {isCartOpen && (
        <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-2 w-screen sm:w-[50%] md:w-[30vw] transition-all duration-400 z-50">
          <button
            onClick={() => setIsCardOpen(false)}
            className="mt-0 mb-2 text-xl cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="max-h-[450px] px-2 overflow-y-auto">
            {cartStore.carts.length > 0 &&
              cartStore.carts.map((item, index) => (
                <Cart key={index} item={item} />
              ))}
            {cartStore.carts.length <= 0 && (
              <div className="flex flex-col items-center mt-10 w-full h-full text-quinary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100"
                  height="100"
                  color="#9b9b9b"
                  fill="none"
                >
                  <path
                    d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6 6H22"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="6"
                    cy="20"
                    r="2"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="17"
                    cy="20"
                    r="2"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8 20L15 20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <p className="text-[0.9rem] mt-3">
                  There is nothing to checkout!
                </p>
              </div>
            )}
          </div>
          {cartStore.carts.length > 0 && (
            <Link
              className="w-full flex justify-center pt-4"
              to="/checkout"
              onClick={() => setIsCardOpen(false)}
            >
              <Button
                customeClass={"w-[full] mx-5 !text-[0.7rem]"}
                buttonName={"Checkout"}
              />
            </Link>
          )}
        </section>
      )}
    </>
  );
}

export default CartList;
