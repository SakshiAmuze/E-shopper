import React,{useRef,useState,useEffect} from 'react'

export default function Form(props) {

    var x1 = useRef();
    var x2 = useRef();
    var [email,setemail] = useState("sk@gmail.com");
    var [password,setpassword] = useState("123");
    // useEffect(()=>{
    //     console.log("useeffect called",email,password)
    // })

    // useEffect(()=>{
    //     console.log("useeffect called",email,password)
    // },[])

    // useEffect(()=>{
    //     console.log("useeffect called",email,password)
    // },[email])

    // useEffect(()=>{
    //     console.log("useeffect called",email,password)
    // },[email,password])

    useEffect(()=>{
        console.log("useeffect called",email,password);
        return ()=>{
            console.log("useeffect called");
        }
    })

    function myfunc(event){
        console.log("test");
        event.preventDefault();
        console.log(x1,x2);
        var data1 = x1.current.value;
        var data2 = x2.current.value;
        console.log(data1,data2);
        setemail(data1);
        setpassword(data2);

    }
    return (
        <div className='container p-5'>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" ref={x1} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" ref={x2} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button  onClick={myfunc} type="submit" class="btn btn-primary">Submit</button><br/>

                {props.username},
                {props.userage}<br/>

                {email},
                {password}
            </form>
        </div>
    )
}
