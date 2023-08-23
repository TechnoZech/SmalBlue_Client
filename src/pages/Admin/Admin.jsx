import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
	

	return (
		<>
			<div className="h-screen bg-blue2 dark:bg-dark">
				<h1 className="text-blue dark:bg-dark  bg-blue2 text-center font-bold text-4xl pt-[130px] md:text-5xl dark:text-darkBlue ">
					Hey, <span className="text-darkBlue dark:text-blue">Admin</span>
				</h1>
				<section className=" bg-blue2 px-[5%] md:px-[10%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-14 md:gap-10 gap-5 py-10 lg:py-[50px] dark:bg-dark">
					
					
				</section>
			</div>
		</>
	);
};

export default Admin;
