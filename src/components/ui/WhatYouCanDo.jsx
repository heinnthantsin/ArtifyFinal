import React from 'react'
import style from '../../assets/style/responsive'

function WhatYouCanDo({ sectionTitle }) {
    return (
        <>
            <h1 className={`${style.responsiveTitle} text-center lg:mb-10 mb-8`}>{sectionTitle}</h1>
            <div className='flex flex-col sm:flex-col lg:flex-row sm:gap-5  md:align-center sm:min-h-[600px]:'>
                <div className=' lg:w-[50%] h-full '>
                    <p className={`${style.responsiveContent} text-[0.6rem] sm:text-[0.9rem] mb-5 md:leading-9 md:text-[1rem]`}>Artify offers a curated collection of original artworks, including paintings, sculptures, photography, and digital art, crafted by talented artists worldwide. Additionally, we provide a variety of handcrafted goods such as jewelry, ceramics, textiles, and home decor, ensuring each piece is unique and meticulously made. We also host exciting art events, from gallery openings and art fairs to workshops and artist meet-and-greets, designed to inspire, educate, and connect both artists and art lovers.</p>
                </div>
                <div className='lg:w-[50%] h-[50vh] sm:min-h-[50vh] rounded-2xl'>
                    <img className='w-full h-full object-cover rounded-lg' src="src\assets\img\passion.jpg" />
                </div>
            </div >
        </>
    )
}

export default WhatYouCanDo