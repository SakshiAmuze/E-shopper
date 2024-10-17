import React, { useState } from 'react'
import Content from './Content';
import SearchContext from '../Context/SearchContext';


export default function Fakestore() {
    var [rec,setrec] = useState("");
    var [rec1,setrec1] = useState("");

    var myfunc = function(ev){
        setrec(ev.target.value);
        // console.log(ev.target.value);

    }
    var myfunc1 = function(ev){
        setrec1(ev.target.value);
        // console.log(ev.target.value);

    }
  return (
    <div className="container border border-1">
        <h1 className='p-2'>Fakestore - Props Drilling</h1>
        <div className="border-bottom border-1 p-3">
            <input type="text" className='form-control' onBlur={myfunc} />
            {rec}
            <br/>
            <br/>
            <input type="text" className='form-control' onBlur={myfunc1} />

            <SearchContext.Provider value={rec1}>
              <Content p1={rec} />
            </SearchContext.Provider>
        </div>
    </div>
  )
}
