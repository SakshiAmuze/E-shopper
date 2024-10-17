import React, { useEffect, useState } from 'react'
import url from "../env"
import useFetch from '../Hooks/useFetch'

export default function Brand() {
    var brands = useFetch('/brands/show-brand')
    console.log(brands);
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
        <div class="brands_products">
            <h2>Brands</h2>
            <div class="brands-name">
                <ul class="nav nav-pills nav-stacked">

                    {
                        brands.data && brands.data.length>0 && brands.data.map(val =>
                            <li><a href="#"> <span class="pull-right">(50)</span>{val.brandname}</a></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
