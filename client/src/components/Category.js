import React, { useEffect, useState } from 'react'

export default function Category({p1}) {

  const[cat,setCat] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
              setCat(json);
            })
  },[]);

  var myfunc = (value)=>{
    console.log(value);
    p1(value);
  }
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {
          cat && cat.map(value=>
            <li onClick={()=>{myfunc(value)}}>{value}</li>
            )
        }
      </ul>
    </div>
  )
}
