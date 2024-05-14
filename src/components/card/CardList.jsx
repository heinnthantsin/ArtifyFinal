import React from "react";
import Card from "./Card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "../../assets/style/responsive";
import { routeCheck } from "../../utils/GeneralFunctions";

function CardList({ itemList }) {
  const nagigate = useNavigate();
  const location = useLocation();
  const isNotHome =
    location.pathname === "/product" || "/artist" ? false : true;
  const goDetail = (id, price) => {
    nagigate(price ? `/product/${id}` : `/artist/${id}`);
  };
  console.log("Item list", itemList);
  return (
    <>
      {isNotHome && (
        <h1 className={style.responsiveTitle}>
          {routeCheck(location.pathname)} List
        </h1>
      )}
      {/* {isNotHome && (<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-auto">
                {itemList.map((item, index) => (
                    <Link className="w-full" to={`${location.pathname}/${item.id}`} key={index}>
                        <Card name={item.name} img={item.img} price={item.price} artist={item.artist} category={item.category} rating={item.rating} />
                    </Link>
                ))}
            </div>)}
            {!isNotHome && <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-auto">
                {itemList.map((item, index) => (
                    <Link className="w-full" to={`/product/${item.id}`} key={index}>
                        <Card name={item.name} img={item.img} price={item.price} artist={item.artist} category={item.category} rating={item.rating} />
                    </Link>
                ))}
            </div>} */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-auto cursor-pointer mt-5">
        {itemList.map((item, index) => (
          <div
            className="w-full"
            key={index}
            onClick={() => goDetail(item.id, item.price)}
          >
            <Card
              name={item.name}
              img={item.img}
              price={item.price}
              artist={item.artist}
              category={item.category}
              rating={item.rating}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardList;
