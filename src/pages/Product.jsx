import React, { useEffect, useState } from "react";
import { TabTitle } from "../utils/GeneralFunctions";
import CardList from "../components/card/CardList";
import productData from "../data/ProductData";
import FollowingList from "../components/card/FollowingList";
import DefaultPagination from "../components/util/DefaulePagination";
import Filter from "../components/filter/Filter";

function Product() {
  TabTitle("Artify | Art");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [term, setTerm] = useState("");
  const [order, setOrder] = useState("desc");
  const [start, setStart] = useState(0);
  const itemPerPage = 12;
  useEffect(() => {
    let filtered = productData;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((data) => data.category === selectedCategory);
    }

    if (term.trim() !== "") {
      filtered = filtered.filter((data) =>
        data.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredData(filtered.slice(start, start + itemPerPage));
    console.log("Filtered Data", filtered);
  }, [selectedCategory, term, start]);
  return (
    <>
      <Filter
        term={term}
        order={order}
        setOrder={() => setOrder(order === "desc" ? "asc" : "desc")}
        setTerm={(value) => setTerm(value)}
        selectedCategory={selectedCategory}
        setSelectedCategory={(value) => setSelectedCategory(value)}
      />
      {filteredData.length > 0 ? (
        <CardList itemList={filteredData} />
      ) : (
        <div className="w-full flex flex-col justify-center items-center my-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100"
            height="100"
            color="#9b9b9b"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 11L8.5 9.5M8.5 9.5L7 8M8.5 9.5L7 11M8.5 9.5L10 8M17 11L15.5 9.5M15.5 9.5L14 8M15.5 9.5L14 11M15.5 9.5L17 8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 17C8.91212 15.7856 10.3643 15 12 15C13.6357 15 15.0879 15.7856 16 17"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-lg mt-5 text-[#9b9b9b]">
            Sorry, No product found.
          </h1>
        </div>
      )}
      <div className="flex justify-center mt-4">
        <DefaultPagination
          start={start}
          setStart={(value) => setStart(value)}
          totalItemLength={productData.length}
          itemPerPage={itemPerPage}
        />
      </div>
      {
        <FollowingList
          itemList={productData.filter((item) => item.rating > 4)}
          sectionTitle={"Recommended Product"}
        />
      }
    </>
  );
}

export default Product;
