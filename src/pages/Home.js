import React, { useContext, useEffect, useState } from 'react'
import Template from '../templates/Template';
import { ContextApiNews } from '../context/ContextApi';


function Home() {
  const { articles } = useContext(ContextApiNews)

  const array = articles?.map((el, i) => {
    return <Template id={i} newsTemp={el.author} newsTitle={el.title} newsDescr={el.description} urlToImage={el.urlToImage} />
  })
  console.log(array);
  return (
    <div className='news__home margin'>
      <div className='news__home-wrap'>
        <span className='news__home line'></span>
        <h1 className='news__home-title' >only true news </h1>
        <span className='news__home line'></span>
      </div>
      <div className='news__flex'>
        {array}
      </div>
    </div>

  )
}

export default Home;