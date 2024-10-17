import React, { useEffect, useState } from 'react'
import url from "../env"
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { categoryDataTransfer } from '../Redux/Reducers/categorySlice'

export default function Categories() {

    const dispatch = useDispatch()
    
    function myfunc(ev, catid) {
        ev.preventDefault();
        console.log(catid)
        dispatch(categoryDataTransfer(catid))
    }

    var category = useFetch('/categories/show-category')


    console.log(category);
    // var [category, setcategory] = useState([]);
    // useEffect(() => {
    //     console.log(url);

    //     fetch(url.apipath + '/products/categories')
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             setcategory(json)
    //         })
    // }, [])
    return (
        <div class="category_products">
            <h2>Categories</h2>
            <div class="category-name">
                <ul class="nav nav-pills nav-stacked">

                    {
                        category.data && category.data.length && category.data.map(val =>
                            <li onClick={(ev) => { myfunc(ev, val._id) }}><a href="#"> <span class="pull-right">(50)</span>{val.category_name}{val._id}</a></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
