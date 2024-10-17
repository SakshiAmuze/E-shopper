import React, { useEffect, useState } from 'react'
import url from "../env"
import useFetch from '../Hooks/useFetch'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Product() {

    const catidValue = useSelector((state) => state.category.value)
    console.log(catidValue)

    var path = (catidValue == "") ? '/products/show-product' : `/products/show-product-by-category/${catidValue}`

    var products = useFetch(path)
    console.log(products);
    // var [brands, setbrands] = useState([]);
    // useEffect(() => {
    //     console.log(url);

    //     fetch(url.apipath + '/products/categories')
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             setbrands(json)
    //         })
    // }, [])
    return (
        <div class="col-sm-9 padding-right">
            <div class="features_items">
                <h2 class="title text-center">Features Items</h2>
                <div class="col-sm-4">
                    <div class="product-image-wrapper">
                        <div class="single-products">

                            {

                                products.data && products.data.length > 0 && products.data.map(val =>
                                    <div class="productinfo text-center">
                                        <img src={url.nodeapipath + "/assets/uploads/" + val.productpath} alt="" />
                                        <p>
                                            <Link to={'/single-page/' + val._id}>
                                            {val.productname}
                                            </Link>
                                        </p>

                                        <p>{val.productprice}</p>
                                        <p>{val.categoryid}</p>
                                        <a href="#" className='btn btn-dark'><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                )
                            }

                        </div>



                    </div>
                </div>


            </div>
        </div>
    )
}
