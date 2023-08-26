import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NoUser from "../../components/NoUser";

const TransactionHistory = () => {
	const userTransactions = useSelector((state) => state.user.user.transactions); //Fetching Transactions
	const isLoggedIn = window.localStorage.getItem("loggedIn");

	return (
		<>
			{isLoggedIn ? (
				<section className="bg-blue2 dark:bg-dark px-[5%]">
					<div className="flex flex-col h-screen items-center justify-center text-center">
						<h1 className="text-dark dark:text-white font-bold text-xl lg:text-4xl mb-11 ">
							Transactions
						</h1>

						{userTransactions.map((transaction, index) => {
							const currency = Object.keys(transaction)[0];
							const amount = transaction[currency];

							return (
								<div
									key={index}
									className="bg-blue flex mb-5 items-center justify-between px-10 py-5 w-[40%] rounded-lg text-white font-semibold text-xl"
								>
									<p>{currency} </p>
									<p>{amount === null ? "(No specific amount)" : amount}</p>
								</div>
							);
						})}
					</div>
				</section>
			) : (
				<NoUser />
			)}
		</>
	);
};

export default TransactionHistory;
