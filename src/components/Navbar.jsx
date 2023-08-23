// import React, { useEffect, useState } from 'react';
import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
const Navbar = (props) => {
	const userData = useSelector((state) => state.user);
	const openNav = () => {
		const hamburger = document.querySelector(".hamburger");
		const navLinks = document.querySelector(".nav-links");
		const links = document.querySelectorAll(".nav-links li");

		navLinks.classList.toggle("open");
		links.forEach((link) => {
			link.classList.toggle("fade");
		});

		//Hamburger Animation
		hamburger.classList.toggle("toggle");
	};

	// <----------------- Scroll to top for Brand icon -------------------->

	function scrollUp() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<>
			<nav className="bg-white text-black drop-shadow dark:bg-darkBlack dark:text-blue2">
				<div className="logo text-2xl">
					<NavLink to="/" onClick={scrollUp} className="font-bold text-blue">
						SmalBlu
					</NavLink>
				</div>
				<div className="hamburger " onClick={openNav}>
					<div className="line1 bg-blue"></div>
					<div className="line2 bg-blue"></div>
					<div className="line3 bg-blue"></div>
				</div>
				<ul className="nav-links bg-white dark:bg-darkBlack">
					{props.theme === "dark" ? (
						<i
							className=" fa-regular fa-sun cursor-pointer hover:text-blue ease-in-out duration-300 text-lg "
							onClick={props.handleThemeSwitch}
						></i>
					) : (
						<i
							className="  fa-solid fa-moon cursor-pointer hover:text-blue ease-in-out duration-300 text-lg "
							onClick={props.handleThemeSwitch}
						></i>
					)}
					<li
						onClick={openNav}
						className="font-medium text-lg  hover:text-blue cursor-pointer ease-in-out duration-300 "
					>
						<HashLink smooth to="/#otherPage">
							otherPage
						</HashLink>
					</li>
					{userData.user.isAdmin ? (
						<li
							onClick={openNav}
							className="font-medium text-md  hover:text-blue cursor-pointer ease-in-out duration-300 "
						>
							<NavLink to="/admin">Admin</NavLink>
						</li>
					) : (
						""
					)}

					{userData.user.length !== 0 ? (
						<NavLink onClick={openNav} to="/profile" className="flex items-center justify-center">
							<h1 className="font-medium text-md text-blueGrey dark:text-blue2  hover:text-blue cursor-pointer ease-in-out duration-300 mr-3">
								Hey,{" "}
								<span className="font-medium text-md text-black dark:text-white  hover:text-blue cursor-pointer ease-in-out duration-300 ">
									{userData.user.name}
								</span>
							</h1>
							<i className="fa-regular fa-user"></i>
						</NavLink>
					) : (
						<>
						<NavLink
							onClick={openNav}
							className=" py-1.5 px-7 login-button text-white bg-blue hover:scale-105 ease-in-out duration-300 font-medium rounded"
							to="/login"
						>
							Login
						</NavLink>
						<NavLink
							onClick={openNav}
							className=" py-1.5 px-7 login-button text-white bg-blue hover:scale-105 ease-in-out duration-300 font-medium rounded"
							to="/signup"
						>
							SignUp
						</NavLink>
						</>
					)}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
