import React from 'react'
import { Link } from 'react-router-dom'
import '../css/template.css'

function Template({ id, newsTemp, newsTitle, newsDescr, urlToImage }) {
  console.log(id);
  return (
    <div className='news__template'>
      <img className='news__img' src={urlToImage} alt='news' />
      <p className='news__title'>{newsTitle}</p>
      <p className='news__descr'>{newsDescr}</p>
      <Link className='news__link' to={`/detail/${newsTitle}`}>View more</Link>

    </div>
  )
}

export function TemplOneNews({ content, urlToImage, url }) {
  return (
    <div className='templ_page'>
      <img className='img__news' src={urlToImage} alt='news' />
      <p className='content__news'>{content}</p>
      <p className='info info-link'>You can read continuation of this article here: <a className='link-hover' href={url}> HERE </a> </p>

    </div>
  )
}

export default Template