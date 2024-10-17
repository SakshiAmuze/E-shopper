import React, { useEffect, useState,useContext } from 'react'
import Product_fs from './Product_fs'
import SearchContext from '../Context/SearchContext';

export default function Right({p2}) {

    var [api,setapi] = useState([]);
    const valueFromSearch = useContext(SearchContext);
    console.log("==",valueFromSearch)

    useEffect(()=>{

        if(p2!='' || valueFromSearch!=''){
            var ans = p2 != '' ? p2 :valueFromSearch;
            fetch('https://fakestoreapi.com/products/category/'+ans)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                if(json.length>0){
                    setapi(json);
                }
            })
        }
    },[p2,valueFromSearch])
  return (
    <div>
    {
        (api && api.length > 0 ) ? (
            <>
            <h1>All Products</h1>
            <div className='row'>
            <Product_fs allPro={api} />
            </div>
            </>
        ):("No Data Found")
    }
    </div>
  )
}
