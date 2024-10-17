import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import useDecodeTokenValue from '../Hooks/useDeodeTokenValue';



export default function Header() {
	var cartCount = useSelector(state => state.cart.value);
	var cartLength = cartCount.length;

	var storageToken = useSelector(state => state.storage.value);
	console.log(storageToken);

	const [name, setName] = useState("");
	const [name1, setName1] = useState("");


	var ans = useDecodeTokenValue(storageToken);
	//   console.log(ans);

	var localStorageData = localStorage.getItem('tokenValue');
	var ans1 = useDecodeTokenValue(localStorageData);

	useEffect(() => {
		var result = (ans == null) ? "" : ans.data.username;
		setName(result);

		var result1 = (ans1 == null)?"":ans1.data.username;
		setName1(result1);
		console.log(result1);


	}, [ans,ans1]);

	return (
		<header id="header">
			<div class="header_top">
				<div class="container">
					<div class="row">
						<div class="col-sm-6">
							<div class="contactinfo">
								<ul class="nav nav-pills">
									<li><a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a></li>
									<li><a href="#"><i class="fa fa-envelope"></i> info@domain.com</a></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="social-icons pull-right">
								<ul class="nav navbar-nav">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
									<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="header-middle">
				<div class="container">
					<div class="row">
						<div class="col-sm-4">
							<div class="logo pull-left">
								<a href="index.html"><img src="images/home/logo.png" alt="" /></a>
							</div>
							<div class="btn-group pull-right">
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
										USA
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="#">Canada</a></li>
										<li><a href="#">UK</a></li>
									</ul>
								</div>

								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
										DOLLAR
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu">
										<li><a href="#">Canadian Dollar</a></li>
										<li><a href="#">Pound</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-sm-8">
							<div class="shop-menu pull-right">
								<ul class="nav navbar-nav">

									<li><Link to=""><i class="fa fa-crosshairs"></i> Home</Link></li>
									<li><Link to="/cart"><i class="fa fa-shopping-cart"></i> Cart({cartLength})</Link></li>

									<li><Link to="/404"><i class="fa fa-lock"></i> 404</Link></li>
									<li><Link to="/form"><i class="fa fa-lock"></i> Form</Link></li>
									{
										((name && name!= '') || (name1 && name1!= '')) ? ( 
											<>
												<li><Link to="/add-category"><i class="fa fa-lock"></i> Add Category</Link></li>
												<li><Link to="/add-product"><i class="fa fa-lock"></i> Add Product</Link></li>

												<li><Link to="/loginout"><i class="fa fa-lock"></i> LogOut ({(name!='')? name:((name1!='')? name1:'')}) </Link></li>

											</>
										) : (
											<li><Link to="/loginpage"><i class="fa fa-lock"></i> Login</Link></li>
										)

									}
									<li><Link to="/fakestore"><i class="fa fa-lock"></i> Fakestore</Link></li>
									<li><Link to="/statelift"><i class="fa fa-lock"></i> State lift</Link></li>

								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="header-bottom">
				<div class="container">
					<div class="row">
						<div class="col-sm-9">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
							<div class="mainmenu pull-left">
								<ul class="nav navbar-nav collapse navbar-collapse">
									<li><a href="index.html" class="active">Home</a></li>
									<li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
										<ul role="menu" class="sub-menu">
											<li><a href="shop.html">Products</a></li>
											<li><a href="product-details.html">Product Details</a></li>
											<li><a href="checkout.html">Checkout</a></li>
											<li><a href="cart.html">Cart</a></li>
											<li><a href="login.html">Login</a></li>
										</ul>
									</li>
									<li class="dropdown"><a href="#">Blog<i class="fa fa-angle-down"></i></a>
										<ul role="menu" class="sub-menu">
											<li><a href="blog.html">Blog List</a></li>
											<li><a href="blog-single.html">Blog Single</a></li>
										</ul>
									</li>
									<li><a href="404.html">404</a></li>
									<li><a href="contact-us.html">Contact</a></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="search_box pull-right">
								<input type="text" placeholder="Search" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

	)
}
