import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";

export default function DefaultPagination({
  start,
  setStart,
  itemPerPage,
  totalItemLength,
}) {
  const [active, setActive] = useState(1);

  const totalPages = Math.ceil(totalItemLength / itemPerPage);

  const handleChangePage = (page) => {
    setActive(page);
    setStart((page - 1) * itemPerPage);
  };

  const handlePrev = () => {
    if (active > 1) {
      handleChangePage(active - 1);
    }
  };

  const handleNext = () => {
    if (active < totalPages) {
      handleChangePage(active + 1);
    }
  };

  return (
    <div className="flex items-center gap-0 sm:gap-1 md:gap-4">
      <Button
        variant="text"
        className="flex items-center gap-0 md:gap-1"
        onClick={handlePrev}
        disabled={active === 1}
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
            d="M4 12L20 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <IconButton
            key={index}
            variant={active === index + 1 ? "filled" : "text"}
            color="gray"
            onClick={() => handleChangePage(index + 1)}
          >
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={handleNext}
        disabled={active === totalPages}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#000000"}
          fill={"none"}
        >
          <path
            d="M20 12L4 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}
