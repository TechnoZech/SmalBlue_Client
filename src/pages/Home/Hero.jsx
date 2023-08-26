import React, { useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { fetchOffers } from "../../redux/slices/fetchOffersSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserData } from "../../redux/slices/userSlice";
const Hero = (props) => {
	const dispatch = useDispatch();
	const token = window.localStorage.getItem("token");
	const offersData = useSelector((state) => state.offers.data);
	const userData = window.localStorage.getItem("CURRENT_USER_DATA");
	const user = JSON.parse(userData);
	useEffect(() => {
		dispatch(fetchOffers());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const acceptOffer = async (item) => {
		try {
			const offerData = { ...item, buyerId: user._id };
			const res = await axios.patch("/offer", { offerData });
			dispatch(fetchOffers());

			//Fetching current user from server with updated balance
			if (token) {
				axios.post("/getuser", { token }).then((res) => {
					if (res.data.data === "token expired") {
						console.log("token expired");
						window.localStorage.clear();
						window.location.href = "/login";
						return;
					} else if (res.data.status === "ok") {
						dispatch(getUserData(res.data.data));
					} else {
						console.log("what?");
					}
				});
			} else {
				console.log("no token found");
			}
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center bg-blue2 px-[10%]  dark:bg-dark md:pt-[60px]">
			<p className="text-md mt-[50px] lg:text-5xl text-center font-bold text-darkBlue dark:text-blue2">
				OFFER ZONE
			</p>
			<div className="flex flex-wrap gap-10 items-center justify-center py-[50px]">
				{offersData &&
					offersData.map((item, idx) => {
						return (
							<div
								key={idx}
								className="w-[300px] lg:w-[500px] py-10 flex flex-col items-center justify-center bg-blue5 rounded-xl  dark:bg-dark4 ease-in-out duration-200 cursor-pointer"
							>
								<div className="flex items-center justify-between gap-5 mb-5">
									<div className="flex items-center justify-center gap-2">
										<i className="fa-regular text-lg fa-user text-darkBlue dark:text-blue2"></i>
										<p className="text-md lg:text-xl text-center font-bold text-darkBlue dark:text-blue2">
											{item.sellerName}
										</p>
									</div>
									<p className="text-md lg:text-lg text-center font-bold text-darkBlue dark:text-blue2">
										( 1 {item.sellCurrency} = {item.sellRate} {item.buyCurrency}{" "}
										)
									</p>
								</div>

								<div className="flex flex-col items-center justify-center">
									<p className="flex items-center justify-center mb-5 text-md lg:text-2xl text-center font-bold text-darkBlue dark:text-blue2">
										{item.sellAmount}
										{item.sellCurrency} &nbsp;
										<i className="fa-solid text-sm fa-arrow-right-arrow-left"></i>
										&nbsp; {item.sellAmount * item.sellRate}
										{item.buyCurrency}
									</p>
									<NavLink
										onClick={() => {
											acceptOffer(item);
										}}
										className=" py-1.5 px-7 text-white bg-blue hover:scale-105 ease-in-out duration-300 font-medium rounded"
										// to="/signup"
									>
										Accept
									</NavLink>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Hero;
