import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TemplOneNews } from '../templates/Template';

function OneNews() {
    const {title } = useParams()
    console.log(title);
    const link = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e049c021c1e74550890c65ff8c78af6e';
    const [data, setData] = useState([])
    let articles = data.articles;
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
        const filterData = articles?.filter( (el) => el.title===title)
        console.log(filterData);
        const mapData = filterData?.map( (el, i) => {
            return <TemplOneNews author={el.author} descr={el.description} content={el.content} urlToImage={el.urlToImage} url={el.url}/> ;
            // return el.content;
        })
        console.log(mapData);
  return (
    <div>
       <p className='title__news'>{title}</p> 
        <p>{mapData}</p>
    </div>
  )
}

export default OneNews