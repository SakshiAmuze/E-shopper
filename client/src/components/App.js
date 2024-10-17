import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';
import Login from './Login';
import Register from './Error404';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import {addValueInCart} from '../Redux/Reducers/cartSlice';

export default function App() {

  const [cookies,setCookie] = useCookies(['cartdata']);
  let dispatch = useDispatch();

  useEffect(()=>{
    var cookieData = cookies.cartdata;
    console.log(cookieData);
    if(cookieData!==undefined){
      dispatch(addValueInCart(cookieData));
    }
  },[])

  return (
    <>
     
        
        <Header></Header>
        <Outlet></Outlet>
        <ToastContainer />
        <Footer></Footer>
      
    </>
  )
}
