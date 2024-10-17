import React, { useRef, useState } from 'react'
import useFetch from '../Hooks/useFetch'
import dataprocess from '../Functions/dataprocess';


export default function Add_product() {
    var ans = useFetch('/category-brand');
    console.log(ans);
    

    var x1 = useRef();
    var x2 = useRef();
    var x3 = useRef();
    var x4 = useRef();
    var x5 = useRef();
    var x6 = useRef();

    var [status, setstatus] = useState(false);
    var [fileData, setfileData] = useState({});

    function myfunc(e) {
        e.preventDefault();
        if (status) {
            var formRecord = new FormData();
            console.log(formRecord);
            formRecord.append('productname', x1.current.value);
            formRecord.append('productprice', x2.current.value);
            formRecord.append('productdiscount', x3.current.value);
            formRecord.append(' categoryid', x4.current.value);
            formRecord.append(' brandid', x5.current.value);
            formRecord.append(' productdesc', x6.current.value);
            formRecord.append('productpath',fileData);
            dataprocess("/products/add-product", {
                method: 'post',
                // headers: { 'Content-Type': 'application/json' },
                body: formRecord
            }).then((res)=>{
                console.log(res);
                
            })
            .catch((err)=>{

            })
        }else{
            alert('Please select file to upload');
        }
    }

    function fileStatus(record) {
        console.log(record);
        console.log(record.files[0]);
        setfileData(record.files[0]);
        setstatus(true);

    }
    return (
        <section id="form">
            <div class="container ">
                <div class="row ">
                    <div class="col-sm-4 col-sm-offset-1">
                        <div class="login-form">
                            <h2>Add Products</h2>
                            <form action="#" onSubmit={myfunc}>
                                <input type="text" ref={x1} placeholder="Name" />
                                <input type="text" ref={x2} placeholder="Price" />
                                 <input type="text" ref={x3} placeholder="Discount" />
                                <select ref={x4}>
                                    <option>Select Categories</option>
                                    {
                                        ans.category && ans.category.map(val =>
                                            <option value={val._id}>{val.category_name}</option>
                                        )
                                    }
                                </select><br />
                                <select ref={x5}>
                                    <option>Select Brands</option>
                                    {
                                        ans.brand && ans.brand.map(val =>
                                            <option value={val._id}>{val.brandname}</option>
                                        )
                                    }
                                </select><br />
                                <input type='file' onChange={(e) => { 
                                    fileStatus(e.target)
                                     }}></input><br />
                                <textarea ref={x6} placeholder='description'></textarea><br />
                                <button type="submit" class="btn btn-default">Add Products</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
