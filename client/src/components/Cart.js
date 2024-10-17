import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import url from '../env'
import { useCookies } from 'react-cookie';
import {removeProductFromCart} from '../Redux/Reducers/cartSlice';
import { toast } from 'react-toastify';

export default function Cart() {

	const [cookies, setCookie,removeCookie] = useCookies(['cartdata']);
	let dispatch = useDispatch();

	var ansCartData = useSelector(state=>state.cart.value);
	console.log(ansCartData);
 

	var deleteData = (ev,id)=>{
		ev.preventDefault();
		console.log(id);

		var ansCookies = cookies.cartdata;
		console.log(ansCookies.length);

		if(ansCookies.length>1){
			console.log(ansCookies);

			var remainingProducts = ansCookies.filter(obj=>obj._id != id);
			console.log(remainingProducts);

			const currentDate = new Date();
            const nextDate = new Date();

            nextDate.setDate(currentDate.getDate() + 1);
            console.log(nextDate);

			var arrDataInString = JSON.stringify(remainingProducts);
            console.log(arrDataInString);

            setCookie('cartdata', arrDataInString, { expires: nextDate });
			dispatch(removeProductFromCart(remainingProducts))
			console.log('Product Deleted from Cart');


		}else{
			console.log('remove last product from cart');
			removeCookie('cartdata');
			dispatch(removeProductFromCart([]));

		}
		toast('Product Deleted from Cart ')




	}



  return (
    
        <section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><a href="#">Home</a></li>
				  <li class="active">Shopping Cart</li>
				</ol>
			</div>
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">Item</td>
							<td class="description"></td>
							<td class="price">Price</td>
							<td class="quantity">Discount</td>
							<td class="total">Total</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						{
							ansCartData && ansCartData.length > 0 && ansCartData.map(obj=>

								<tr>
							<td class="cart_product">
								<a href=""><img  style={{width:'85px'}} src={url.nodeapipath+"/assets/uploads/"+obj.productpath} alt=""/></a>
							</td>
							<td class="cart_description">
								<h4><a href="">{obj.productname}</a></h4>
								
							</td>
							<td class="cart_price">
								<p>{obj.productprice}</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<p>{obj.productdiscount}%</p>
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">
									{obj.productprice - (obj.productprice*obj.productdiscount/100)}
								</p>
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete" href="#" onClick={(ev)=>{deleteData(ev,obj._id)}}><i class="fa fa-times"></i></a>
							</td>
						</tr>

							)
						}

						
						
					</tbody>
				</table>
			</div>
		</div>
	</section>
    
  )
}
