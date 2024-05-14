import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import Button from '../components/util/Button'
import CardList from '../components/card/CardList'
import productData from '../data/ProductData'
import style from '../assets/style/responsive'
import WhatYouCanDo from '../components/ui/WhatYouCanDo'
import Hero from '../components/ui/Hero'
import { Link } from 'react-router-dom'



function Home() {
  TabTitle("Artify | Home")
  return (
    <div>
      <Hero />
      <section className='min-h-[80vh] py-5 px-5 my-10'>
        <WhatYouCanDo sectionTitle={"What You Can Do !"} />
      </section>
      <section className='min-h-[80vh] my-10 px-5'>
        <h1 className={`${style.responsiveTitle} lg:mb-10 mb-8 text-center`}>Popular Product</h1>
        <div>
          <CardList itemList={productData.slice(0, 8)} />
        </div>
        <div className='flex justify-center'>
          <Link to='/product'><Button customeClass="w-[200px] mx-auto m-7" buttonName={"See More"} /></Link>
        </div>
      </section>

    </div >
  )
}

export default Home