import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserData } from "../../redux/slices/userSlice";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const onChangeUserData = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	//! Login function 
	const handleLogin = async () => {
		const response = await axios.post("http://localhost:8080/login", {
			userData,
		});

		if (response.data.status === "ok") {
			alert("Login successful");
			window.localStorage.setItem("token", response.data.data);
			window.localStorage.setItem("loggedIn", true);

			await axios
				.post("http://localhost:8080/getuser", { token: response.data.data })
				.then((res) => {
					if (res.data.data === "token expired") {
						console.log("token expired");
						return;
					} else if (res.data.status === 'ok') {
						dispatch(getUserData(res.data.data));
					}
				});
			navigate("/");
		}else{
			window.alert('wrong Id or Password');
		}
		return response;
	};
	return (
		<>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<NavLink
						to="/"
						className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
					>
						<img
							className="w-8 h-8 mr-2"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
							alt="logo"
						></img>
						WebSite Name
					</NavLink>
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Login in to your account
							</h1>
							<div className="space-y-4 md:space-y-6">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										onChange={onChangeUserData}
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
									></input>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<input
										onChange={onChangeUserData}
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required=""
									></input>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
												required=""
											></input>
										</div>
										<div className="ml-3 text-sm">
											<label
												htmlFor="remember"
												className="text-gray-500 dark:text-gray-300"
											>
												Remember me
											</label>
										</div>
									</div>
									<a
										href="/"
										className="text-sm font-medium text-gray-500 hover:underline dark:text-gray-300"
									>
										Forgot password?
									</a>
								</div>
								<button
									onClick={handleLogin}
									className="w-full text-white bg-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Login
								</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Don’t have an account yet?{" "}
									<NavLink
										to="/signup"
										className="font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Sign up
									</NavLink>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
