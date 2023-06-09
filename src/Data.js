import React from 'react'


function Data(props) {
 
  return (
    <>
    <div className="card" style={{width: "18rem",margin:"50px"}}>
  <img src={props.poster} classNameName="card-img-top" alt="..."/>
  <div className="card-body"> 
    <h5 className="card-title">Name : {props.art} <p> Rating :🌟{props.rating}</p><p>Length : {props.length}</p></h5>
    <a href="https://www.imdb.com/title/tt1883187621/" className="btn btn-primary">Check on IMDB</a>
  </div>
</div>
    </>
  );
}

export default Data;
