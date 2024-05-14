import React from "react";
import Button from "../components/util/Button";
import { Link } from "react-router-dom";
import ArtistData from "../data/ArtistData";
import productData from "../data/ProductData";
import FollowingList from "../components/card/FollowingList";
import { useParams } from "react-router-dom";
import Detail from "../components/card/Detail";

function ProductDetail() {
  const params = useParams();
  const artistId = params.id;
  const artist = ArtistData.find((artist) => artist.id == artistId);
  return (
    <>
      <Detail
        img={artist?.img}
        aboutArtist={artist?.about}
        artist={artist?.artist}
        category={artist?.category}
        artistId={artist?.id}
      />

      <FollowingList
        itemList={productData.filter((item) => item.artist === artist.artist)}
        sectionTitle={"Artist's Works"}
      />
    </>
  );
}

export default ProductDetail;
