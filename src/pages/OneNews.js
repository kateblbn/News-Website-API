import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TemplOneNews } from '../templates/Template';
import { ContextApiNews } from '../context/ContextApi';

function OneNews() {
  const { title } = useParams()
  const { articles } = useContext(ContextApiNews)

  const filterData = articles?.filter((el) => el.title === title)
  console.log(filterData);
  const mapData = filterData?.map((el, i) => {
    return <TemplOneNews author={el.author} descr={el.description} content={el.content} urlToImage={el.urlToImage} url={el.url} />;
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