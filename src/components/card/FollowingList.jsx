import React from 'react'
import style from "../../assets/style/responsive";
import { useNavigate } from 'react-router-dom';
import Card from './Card';

function FollowingList({ itemList, sectionTitle }) {
    const navigate = useNavigate();

    const goDetail = (id) => {
        let basePath = '/product';
        console.log(itemList)
        if (!itemList[0].price) {
            basePath = '/artist';
        }

        const newPath = `${basePath}/${id}`;

        console.log("Href", window.location.href);
        console.log("New Path", newPath);
        navigate(newPath)
        window.scrollTo(0, 0)
    }

    const CheckRoute = () => {
        return (<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-auto">
            {itemList.map((item) => (
                <button className="w-full" key={item.id} onClick={() => goDetail(item.id)} >
                    <Card
                        name={item.name} img={item.img} price={item.price} artist={item.artist} category={item.category} rating={item.rating} />
                </button>
            ))}
        </div >)

    }

    return (
        <>
            <h1 className={`${style.responsiveTitle} mt-10`}>{sectionTitle}</h1>
            <CheckRoute />
        </>
    )
}

export default FollowingList