import axios from 'axios';
import React, { useEffect } from 'react'

function About() {
  const link = 'https://newsapi.org/v2/top-headlines?sources=bbc-news';
  useEffect(() => {
    axios.get(link, {
      headers: {
          Authorization: 'e049c021c1e74550890c65ff8c78af6e'
      }
    })
    .then(responce => console.log(responce))
  }, [])
  return (
    <div className='about__center'>
      <p className='about__site'>About This Site</p>
      <p className='about__took'> News took from <a href='https://www.bbc.com/news'>BBCNews.com</a> </p>
    </div>
  )
}

export default About