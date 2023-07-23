import React, { useEffect } from 'react'

function About() {
  const link = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e049c021c1e74550890c65ff8c78af6e';
  useEffect( () => {
     const getNews = async () => {
      try {
        const connect =  await fetch( link, {
          method: 'GET'
        })
        console.log(connect.ok);
        const res = (!connect.ok)? 'no get data' : 'get data ';
        console.log(res);
        // .then(response => response.json())
        // .then(json => console.log(json))  
      } catch (error) {
        console.log('no connection');
      }
     }
     getNews()
  })
  return (
    <div className='about__center'>
      <p className='about__site'>About This Site</p>
      <p className='about__took'> News took from <a href='https://www.bbc.com/news'>BBCNews.com</a> </p>
    </div>
  )
}

export default About

// useEffect( () => {
//   const getNews = async () => {
//    try {
//      await fetch( link, {
//        method: 'GET'
//      })
//      .then(response => response.json())
//      .then(json => console.log(json))  
//    } catch (error) {
//      console.log('no connection');
//    }
//   }
//   getNews()
// })