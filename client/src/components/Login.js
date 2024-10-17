import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import dataprocess from '../Functions/dataprocess';
import { useNavigate } from 'react-router-dom';
import { tokenDataTransfer } from '../Redux/Reducers/storageSlice';
import { useDispatch } from 'react-redux';

export default function Login() {

	const [msg, setMsg] = useState("");
	const [msg1, setMsg1] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();


	const { register, handleSubmit, watch, formState: { errors }, } = useForm();
	const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 }, } = useForm();


	const onSubmitRegister = (data) => {
		console.log(data)
		dataprocess('/users/registrtion', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
			.then((res) => {
				console.log(res);
				setMsg(res.msg)
			})
			.catch((err) => {
				console.log(err);
			})
	}

	const onSubmitLogin = (data) => {
		console.log(data);

		dataprocess('/users/login', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
			.then((res) => {
				console.log(res);
				setMsg1(res.msg)
				if (res.status) {
					localStorage.setItem("tokenValue", res.tokenValue);
					dispatch(tokenDataTransfer(res.tokenValue));
					navigate('/')

				}
			})
			.catch((err) => {
				console.log(err);
			})


	}
	return (

		<section id="form">
			<div class="container ">
				<div class="row ">
					<div class="col-sm-4 col-sm-offset-1">
						<div class="login-form">
							<h2>Login to your account</h2>
							<form action="#" onSubmit={handleSubmit2(onSubmitLogin)}>
								<input {...register2("useremail", {
									required: "Required",
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})} type="email" placeholder="Email Address" />

								{errors2.useremail?.type === "required" && (
									<p role="alert">Email is required</p>
								)}
								{errors2.useremail?.type === "pattern" && (
									<p role="alert">Email Invalid</p>
								)}

								<input {...register2("userpass", { required: true, minLength: 4, maxLength: 12 })} type="password" placeholder="Password" />

								{errors2.userpass?.type === "required" && (
									<p role="alert">Password is required</p>
								)}
								{errors2.userpass?.type === "minLength" && (
									<p role="alert">minLength:4</p>
								)}
								{errors2.userpass?.type === "maxLength" && (
									<p role="alert">maxLength:12</p>
								)}

								<button type="submit" class="btn btn-default">Login</button>
							</form>
							{msg1}
						</div>
					</div>
					<div class="col-sm-2">
						<h2 class="or">OR</h2>
					</div>
					<div class="col-sm-4">
						<div class="signup-form">
							<h2>New User Signup!</h2>
							<form action="#" onSubmit={handleSubmit(onSubmitRegister)}>
								<input {...register("username", { required: true })} type="text" placeholder="Name" />
								{errors.username?.type === "required" && (
									<p role="alert">Username name is required</p>
								)}
								<input {...register("usermobile", { required: true })} type="text" placeholder="Mobile" />
								{errors.usermobile?.type === "required" && (
									<p role="alert">Mobiile is required</p>
								)}

								<input {...register("useremail", {
									required: "Required",
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})} type="email" placeholder="Email Address" />

								{errors.useremail?.type === "required" && (
									<p role="alert">Email is required</p>
								)}
								{errors.useremail?.type === "pattern" && (
									<p role="alert">Email Invalid</p>
								)}

								<input {...register("userpass", { required: true, minLength: 4, maxLength: 12 })} type="password" placeholder="Password" />

								{errors.userpass?.type === "required" && (
									<p role="alert">Password is required</p>
								)}
								{errors.userpass?.type === "minLength" && (
									<p role="alert">minLength:4</p>
								)}
								{errors.userpass?.type === "maxLength" && (
									<p role="alert">maxLength:12</p>
								)}


								<input {...register("usercpass", {
									required: true,
									validate: (value) => value === watch("userpass") || false
								})} type="password" placeholder="Confirm Password" />

								{errors.usercpass?.type === "required" && (
									<p role="alert">Confirm Password is required</p>
								)}

								{errors.usercpass?.type === "validate" && (
									<p role="alert">Password Mismatch</p>
								)}

								<button type="submit" class="btn btn-default">Signup</button>
							</form>
							{msg}
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
