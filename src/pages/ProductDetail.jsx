import React from "react";
import Button from "../components/util/Button";
import { Link } from "react-router-dom";
import productData from "../data/ProductData";
import FollowingList from "../components/card/FollowingList";
import { useParams } from "react-router-dom";
import Detail from "../components/card/Detail";

function ProductDetail() {
  const params = useParams();
  const productId = params.id;
  const product = productData.find((product) => {
    if (product.id === Number(productId)) {
      return product;
    }
  });
  return (
    product && (
      <>
        <Detail
          name={product?.name}
          img={product?.img}
          artist={product?.artist}
          category={product?.category}
          price={product?.price}
          rating={product?.rating}
          productId={product?.id}
        />

        <FollowingList
          itemList={productData}
          sectionTitle={"Recommended Products"}
        />
      </>
    )
  );
}

export default ProductDetail;
