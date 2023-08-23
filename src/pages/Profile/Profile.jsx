import React from "react";
import NoUser from "../../components/NoUser";
import { useSelector } from "react-redux";

const Profile = (props) => {

	const isLoggedIn = window.localStorage.getItem('loggedIn');
	// <----------------- Logout -------------------->

	const logout = () => {
		window.localStorage.clear();
		window.location.href = "/login";
	};
	const userData = useSelector((state) => state); //Fetching userData

	return (
		<>
			{isLoggedIn ? <section className="bg-blue2 dark:bg-dark px-[5%] h-screen">
			<div className="flex flex-col h-screen items-center justify-center text-center">
				<h1 className="text-dark dark:text-white font-bold text-xl lg:text-4xl mb-11 ">
					{" "}
					<span className="text-blue">
						{" "}
						Hi {userData.user.user.name},
					</span>{" "}
					How are you doing?
				</h1>
				<div className="flex flex-col items-center justify-center bg-blue dark:bg-darkBlue py-16 px-8 rounded-2xl ">
					<i className="text-white text-4xl fa-regular fa-user"></i>
					<p className="text-white mt-5 font-semibold text-xl ">
						{userData.user.user.name}
					</p>
					<p className="text-white font-medium mt-2">
						{userData.user.user.email}
					</p>
				</div>
				<button
					className=" py-2 px-7 text-md text-blue bg-blue2 border-blue border-2  hover:bg-blue hover:text-white dark:bg-dark dark:text-white dark:hover:bg-darkBlue dark:border-darkBlue ease-in-out duration-100 font-semibold rounded mt-5"
					onClick={logout}
				>
					Logout
				</button>
			</div>
		</section> : 
		
		<NoUser></NoUser>
		
		}
		</>
	);
};

export default Profile;
