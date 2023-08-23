import React from "react";
import { NavLink } from "react-router-dom";
const NoUser = () => {
	return (
		<>
			<section className=" dark:bg-dark flex flex-col items-center justify-center h-screen">
				<h1 className="text-3xl font-bold  text-black mb-5 dark:text-white">Error 404... Page not Found!</h1>
				<NavLink
					className=" py-1.5 px-7 login-button text-white bg-blue hover:scale-105 ease-in-out duration-300 font-medium rounded"
					to="/login"
				>
					Login
				</NavLink>
			</section>
		</>
	);
};

export default NoUser;
