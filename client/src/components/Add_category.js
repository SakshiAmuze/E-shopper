import React, { useState } from 'react'
import dataprocess from '../Functions/dataprocess';

export default function Add_category() {
    function myfunc(e) {
        e.preventDefault();
        console.log(category);
        if((category) != "") {
            var tokenvalue = localStorage.getItem('tokenValue');
            // console.log(tokenValue);
            dataprocess("/categories/add-category", {
                method: 'post',
                headers: { 'Content-Type': 'application/json',
                           'Authorization': `Bearer ${tokenvalue}`
             },
                body: JSON.stringify({category_name:category})
            }).then((res)=>{
                console.log(res);
                setmsg(res.msg);
            })
            .catch((err)=>{

            })

        } else {
            setmsg("Category name required");
        }
    }

    var [category, setcategory] = useState("");
    var [msg, setmsg] = useState("");
    return (
        <section id="form">
            <div class="container ">
                <div class="row ">
                    <div class="col-sm-4 col-sm-offset-1">
                        <div class="login-form">
                            <h2>Add Product</h2>
                            <form action="#" onSubmit={myfunc}>
                                <input type="text" onChange={(e) => { setcategory(e.target.value) }} placeholder="Name" />
                                <button type="submit" class="btn btn-default">Add</button>
                                <p>{msg}</p>
                                <p>{category}</p>
                               
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <h2 class="or">OR</h2>
                    </div>
                    <div class="col-sm-4">
                        <div class="signup-form">
                            <h2>New User Signup!</h2>
                            <form action="#">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email Address" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn btn-default">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
