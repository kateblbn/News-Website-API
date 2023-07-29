import React, { createContext, useEffect, useState } from 'react'

export const ContextApiNews = createContext();

function ContextApi(props) {
  const link = 'https://newsapi.org/v2/top-headlines?sources=bbc-news';
  const [data, setData] = useState([])
  let articles = data.articles;
  console.log(articles);
  useEffect(() => {
    const getData = async () => {
      fetch(link, {
        method: 'GET',
        headers: {
          Authorization: 'e049c021c1e74550890c65ff8c78af6e'
        }
      })
        .then(response => response.json())
        .then(json => setData(json))
    }
    getData();
  }, []);

  const DataUse = { articles }
  return (
    <div>
      <ContextApiNews.Provider value={DataUse}>{props.children}</ContextApiNews.Provider>
    </div>
  )
}

export default ContextApi