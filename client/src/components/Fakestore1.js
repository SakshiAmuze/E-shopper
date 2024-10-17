import React, { useState } from 'react'
import Allproducts from './Allproducts'
import Category from './Category'

export default function Fakestore1() {
  const[catvalue,setCatvalue] = useState("");

  function xyz(value){
    console.log('This is parent component function',value);
    setCatvalue(value);
  }
  return (
    <div className='container'>
      <h1>Fakestore1 - State Lift,{catvalue}</h1>
      <div className='row'>
      <div className='col-3'>
        <Category p1={xyz} />
      </div>
      <div className='col-9'>
           <Allproducts p2={catvalue}/>
      </div>
      </div>
    </div>
  )
}
