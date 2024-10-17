import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Product_fs from './Product_fs';

export default function Allproducts({p2}) {

  const[pro,setPro] = useState([]);

  useEffect(()=>{
    var apipath = (p2== "")?`https://fakestoreapi.com/products/`:`https://fakestoreapi.com/products/category/${p2}`;
    console.log(apipath);

    fetch(apipath)
            .then(res=>res.json())
            .then(json=>{
              setPro(json)

            })
  },[p2])

  return (
    <div>
      <h1>All Products</h1>

      <div className='row'>
        <Product_fs allPro={pro} />
      </div>
    </div>
  )
}
