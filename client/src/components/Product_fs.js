import React from 'react'

export default function Product_fs({allPro}) {
  return (
    <>
    {
      allPro && allPro.map(({image,price,title})=>
      <div className='col-3 text-center'>
        <img src={image} className='img-fluid'></img>
        <h2>{price}</h2>
        <p>{title}</p>
      </div>
      )
    }
    </>
  )
}
