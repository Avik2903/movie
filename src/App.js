import React, { useEffect, useState } from 'react'
import Data from './Data'

function App() {
  const [articles, setArticles] = useState([])
  const updateNews = async () => {
    const url = "http://localhost:5000/";
    let dat = await fetch(url);
    let parsedData = await dat.json()
    setArticles(parsedData);
    console.log(articles)    //eslint-disable-next-line
    console.log("game")    //eslint-disable-next-line
  }
  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  },[])
  return (
    <>
      <h1 style={{textAlign:"center",backgroundColor:"Black",color:"yellow",padding:"20px"}}>Movies Site</h1>
      <div className="container my-5 mx-5">
            <div className="row my-3 mx-5">
      {articles.map((element) => {
              
        return <Data art={element.m_name} poster={element.m_poster} rating={element.rating} length={element.length} />
      })}
            </div>
            </div>
    </>
  );
}

export default App;
