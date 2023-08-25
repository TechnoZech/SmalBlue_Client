import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostOffer = () => {
    const navigate = useNavigate();
    const userData = window.localStorage.getItem('CURRENT_USER_DATA');
    const user = JSON.parse(userData);
    const [newOfferData, setNewOfferData] = useState({
		sellCurrency: "INR",
		buyCurrency: "INR",
		sellRate: "",
        sellAmount: "",
        sellerID: user._id,
        sellerName: user.name,
	});

    const [totalTranValue, setTotalTranValue] = useState();

    useEffect(()=>{
        const total = newOfferData.sellRate * newOfferData.sellAmount;
        setTotalTranValue(total);
    },[newOfferData])

    // set offer data
    let setInputData = (e) => {
		setNewOfferData({
			...newOfferData,
			[e.target.name]: e.target.value,
		});
        
	}

    // <------------ create new offer into DB ------------>

    const handleOfferData = async() => { // On Submit
        try {
            
            const res = await axios.post('/offer', {newOfferData});
            navigate("/");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
	return (
		<>
			return (
			<>
				<div className="py-[5%] h-screen px-[5%] bg-blue2 dark:bg-dark">
					<h1 className="text-blue dark:bg-dark  bg-blue2 text-center font-bold text-4xl md:text-4xl dark:text-white ">
						Post new offer
					</h1>
					<h1 className="text-dark dark:bg-dark  bg-blue2 text-center font-medium	 text-md pt-[30px] md:text-xl dark:text-white text-decoration-line: underline">
						Current Balance : INR: {user.balance.INR} , USD: {user.balance.USD}, EUR: {user.balance.EUR}
					</h1>

					<div className="mx-[10%] mt-[20px] flex flex-col items-center gap-5 justify-center">
						<div className="mt-5 flex gap-5 items-center justify-center">
							<label
								className="font-medium text-darkBlue text-xl  dark:text-white mr-2 "
								htmlFor="sellCurrency"
							>
								Select a currency to sell :
							</label>

							<select
								className="font-medium text-md p-2"
								onChange={setInputData}
								name="sellCurrency"
							>
								<option value="INR">INR</option>
								<option value="EUR">EUR</option>
								<option value="USD">USD</option>
							</select>
						</div>
						<div className="mt-5 flex gap-5 items-center justify-center">
							<label
								className="font-medium text-darkBlue text-xl  dark:text-white mr-2 "
								htmlFor="buyCurrency"
							>
								Select a currency to Buy :
							</label>

							<select
								className="font-medium text-md p-2"
								onChange={setInputData}
								name="buyCurrency"
							>
								<option value="INR">INR</option>
								<option value="EUR">EUR</option>
								<option value="USD">USD</option>
							</select>
						</div>

						<div className="flex  justify-left items-center gap-5 ">
							<p className="text-darkBlue dark:bg-dark  bg-blue2 text-center font-medium text-md md:text-xl dark:text-white">
								Enter your sell rate for 1{newOfferData.sellCurrency} =
							</p>
							<input
								name="sellRate"
								onChange={setInputData}
								value={newOfferData.sellRate}
								className=" w-[100px] text-md font-medium p-3 rounded-md"
							></input>
                            <p className="text-darkBlue dark:bg-dark  bg-blue2 text-center font-medium text-md md:text-xl dark:text-white">
							{newOfferData.buyCurrency}
							</p>
						</div>
						<div className="flex  justify-left items-center gap-5 ">
							<p className="text-darkBlue dark:bg-dark  bg-blue2 text-center font-medium text-md md:text-xl dark:text-white">
								Enter the amount you want to sell : 
							</p>
							<input
								name="sellAmount"
								onChange={setInputData}
								value={newOfferData.sellAmount}
								className=" w-[100px] text-md font-medium p-3 rounded-md"
							></input>
                            <p className="text-darkBlue dark:bg-dark  bg-blue2 text-center font-medium text-md md:text-xl dark:text-white">
								{newOfferData.sellCurrency}
							</p>
						</div>
						<div className="flex mt-5  justify-left items-center gap-5 ">
							<p className="text-darkBlue dark:bg-dark  bg-blue2 text-center font-bold text-md md:text-3xl dark:text-white">
								Do you want to sell {newOfferData.sellAmount}{newOfferData.sellCurrency}  for
							</p>
                            <p className="text-darkBlue dark:bg-dark  bg-blue2 text-center font-bold text-md md:text-3xl dark:text-white">
								{totalTranValue}{newOfferData.buyCurrency}?
							</p>
						</div>

						<button
							onClick={handleOfferData}
							className="font-semibold flex items-center justify-center border-2 border-blue6 rounded-sm py-2.5 px-10 mt-10 mx-auto bg-blue6 text-white hover:text-white hover:border-black hover:bg-black ease-in-out duration-300 dark:bg-blue dark:border-blue dark:hover:bg-dark dark:hover:text-blue"
						>
							POST OFFER
						</button>
					</div>
				</div>
			</>
			);
		</>
	);
};

export default PostOffer;
