import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserData } from "./redux/slices/userSlice";
import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/Scroll";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginSignUp/Login";
import SignUp from "./pages/LoginSignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import PostOffer from "./pages/User/PostOffer";
import TransactionHistory from "./pages/User/TransactionHistory";

function App() {
	//DarkMode
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	//Fetching current user from server
	const dispatch = useDispatch();
	const token = window.localStorage.getItem('token');
	useEffect(() => {
		if(token){
			axios.post('/getuser', {token})
			.then((res) => {
				if (res.data.data === 'token expired') {
					console.log('token expired');
					window.localStorage.clear();
					window.location.href = "/login";
					return;
				}else if(res.data.status === 'ok'){
					return dispatch(getUserData(res.data.data));
				}else{
					console.log('what?');
				}
			});
		}else{
			console.log('no token found');
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return (
		<Router>
			<ScrollToTop />
			<Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
			<Routes>
				<Route path="*" element={<Home theme={theme} />} theme={theme} />
				<Route path="/" element={<Home theme={theme} />} />
				<Route path="/Profile" element={<Profile theme={theme} />} />
				<Route path="/EditProfile" element={<EditProfile theme={theme} />} />
				<Route path="/SignUp" element={<SignUp theme={theme} />} />
				<Route path="/Login" element={<Login theme={theme} />} />
				<Route path="/PostOffer" element={<PostOffer theme={theme} />} />
				<Route path="/TransactionHistory" element={<TransactionHistory theme={theme} />} />
			</Routes>
		</Router>
	);
}

export default App;