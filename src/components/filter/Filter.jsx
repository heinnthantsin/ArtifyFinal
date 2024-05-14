import { Input } from "@material-tailwind/react";
import React, { useState } from "react";

function Filter({
  term,
  setTerm,
  order,
  setOrder,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-5 mb-6">
        <div className="col-start-2 col-span-3 me-3">
          <Input
            label="Search here"
            className="mb-10"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        {
          <div className="flex items-center gap-3">
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={28}
                height={28}
                color={"#000000"}
                fill={"none"}
              >
                <path
                  d="M14 14L16.5 16.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* <button
              className="rounded-md hover:bg-gray-300/80 cursor-pointer p-1"
              onClick={setOrder}
            >
              {order === "desc" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M7 20.9994V14.9481C7 14.3736 7 14.0863 6.76959 14.0149C6.26306 13.8577 5.5 14.999 5.5 14.999M7 20.9994H5.5M7 20.9994H8.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 6.5V4.75C9 3.92504 9 3.51256 8.70711 3.25628C8.41421 3 7.94281 3 7 3C6.05719 3 5.58579 3 5.29289 3.25628C5 3.51256 5 3.92504 5 4.75C5 5.57496 5 5.98744 5.29289 6.24372C5.58579 6.5 6.05719 6.5 7 6.5H9ZM9 6.5V7.375C9 8.61244 9 9.23116 8.56066 9.61558C8.12132 10 7.41421 10 6 10H5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 19.999V3.99902M16.5 19.999C15.7998 19.999 14.4915 18.0047 14 17.499M16.5 19.999C17.2002 19.999 18.5085 18.0047 19 17.499"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {order === "asc" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M7 10.0003V3.94909C7 3.37458 7 3.08732 6.76959 3.01583C6.26306 2.85867 5.5 4 5.5 4M7 10.0003H5.5M7 10.0003H8.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 17.5V15.75C9 14.925 9 14.5126 8.70711 14.2563C8.41421 14 7.94281 14 7 14C6.05719 14 5.58579 14 5.29289 14.2563C5 14.5126 5 14.925 5 15.75C5 16.575 5 16.9874 5.29289 17.2437C5.58579 17.5 6.05719 17.5 7 17.5H9ZM9 17.5V18.375C9 19.6124 9 20.2312 8.56066 20.6156C8.12132 21 7.41421 21 6 21H5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 20V4M16.5 20C15.7998 20 14.4915 18.0057 14 17.5M16.5 20C17.2002 20 18.5085 18.0057 19 17.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button> */}
          </div>
        }
      </div>
      <div className="w-full flex justify-center items-center lg:gap-4 md:gap-2 gap-1 flex-wrap">
        <button
          className={`py-1 px-2 rounded-md ${
            selectedCategory === "All"
              ? "bg-gray-600 text-white"
              : "bg-[#f2f2f2] text-gray-900"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`py-1 px-2 rounded-md ${
            selectedCategory === "Ceramic"
              ? "bg-gray-600 text-white"
              : "bg-[#f2f2f2] text-gray-900"
          }`}
          onClick={() => setSelectedCategory("Ceramic")}
        >
          Ceremic
        </button>
        <button
          className={`py-1 px-2 rounded-md ${
            selectedCategory === "Painting"
              ? "bg-gray-600 text-white"
              : "bg-[#f2f2f2] text-gray-900"
          }`}
          onClick={() => setSelectedCategory("Painting")}
        >
          Painting
        </button>
        <button
          className={`py-1 px-2 rounded-md ${
            selectedCategory === "Digital Art"
              ? "bg-gray-600 text-white"
              : "bg-[hsl(0,0%,95%)] text-gray-900"
          }`}
          onClick={() => setSelectedCategory("Digital Art")}
        >
          Digital Art
        </button>
        <button
          className={`py-1 px-2 rounded-md ${
            selectedCategory === "NFT"
              ? "bg-gray-600 text-white"
              : "bg-[#f2f2f2] text-gray-900"
          }`}
          onClick={() => setSelectedCategory("NFT")}
        >
          NFT
        </button>
        <button
          className={`py-1 px-2 rounded-md ${
            selectedCategory === "Handcraft"
              ? "bg-gray-600 text-white"
              : "bg-[#f2f2f2] text-gray-900"
          }`}
          onClick={() => setSelectedCategory("Handcraft")}
        >
          Handcraft
        </button>
        <button
          className={`py-1 px-2 rounded-md ${
            selectedCategory === "Photograph"
              ? "bg-gray-600 text-white"
              : "bg-[#f2f2f2] text-gray-900"
          }`}
          onClick={() => setSelectedCategory("Photograph")}
        >
          Photograph
        </button>
      </div>
    </div>
  );
}

export default Filter;
