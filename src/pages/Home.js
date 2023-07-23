import React, { useEffect, useState } from 'react'
import Template from '../templates/Template';

function Home() {
  const link = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e049c021c1e74550890c65ff8c78af6e';
  const [data, setData] = useState([])
  let articles = data.articles;
  console.log(articles);
  useEffect( () => {
    const getData = async () => {
      fetch(link, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => setData(json))
    }
    getData();
  }, []);
  const array = articles?.map( (el, i) => {
    return <Template newsTemp={el.author} newsTitle={el.title} newsDescr={el.description} urlToImage={el.urlToImage}/>
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