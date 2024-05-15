import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Star from "./Star";


function Card({ img, name, artist, category, price, rating }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const hoverBox = {
    width: "100%",
    position: "absolute",
    bottom: "0",
    opacity: isHovered ? "0.75" : "0",
    backgroundColor: "#D3d8e4",
    backdropFilter: "blur(2px)",
    color: "#fff",
    letterSpacing: "1px",
    transition: "all 0.4s",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="shadow-md rounded-lg h-fit relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-slate-200 w-full h-[400px] overflow-hidden">
        <img
          className="w-full h-full rounded-t-lg object-cover"
          src={img}
          alt="art"
        />
      </div>
      {isHovered && (
        <div
          className="flex justify-between items-center px-3 pt-2"
          style={hoverBox}
        >
          <div className="flex-1">
            {!price && (
              <div className="">
                {artist && (
                  <span className="text-md text-[#204045] montserrat font-bold pb-1">
                    {artist}
                  </span>
                )}
                {category && (
                  <span className="w-fit block !text-xs bg-[#204045] text-gray-300 montserrat font-extralight p-1 rounded-md">
                    {category}
                  </span>
                )}
              </div>
            )}
            <div className="fle">
              <span className="flex mb-2 justify-start">
                <Star rating={rating} />
              </span>
              {name && (
                <p className="text-start text-[#204045] montserrat font-semibold pb-1">
                  {name}
                </p>
              )}
              {price && (
                <p className="text-start text-[#204045] montserrat font-semibold space-x-2">
                  ${price}
                </p>
              )}
            </div>
          </div>
          {price && (
            <svg
              version="1.1"
              id="icons_1_"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 128 128"
              className="w-8 h-8 ml-4"
              style={{ enableBackground: "new 0 0 128 128" }}
              xmlSpace="preserve"
            >
              <style>{`.st0{display:none}.st1{display:inline}.st2{fill:#0a0a0a}`}</style>
              <g id="row1_1_">
                <g id="_x31__3_">
                  <path
                    className="st2"
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
                    id="_x32__2_"
                  />
                </g>
              </g>
            </svg>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
