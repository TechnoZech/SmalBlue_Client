import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
    const navigate = useNavigate();
    const userData = window.localStorage.getItem('CURRENT_USER_DATA');
    const user = JSON.parse(userData);
    const [newProfileData, setNewProfileData] = useState({
        userID: user._id,
		name: user.name,
        email: user.email,
        INR: user.balance.INR,
        EUR: user.balance.EUR,
        USD: user.balance.USD
	});

    //! set updated profile data
    let setInputData = (e) => {
		setNewProfileData({
			...newProfileData,
			[e.target.name]: e.target.value,
		});
        
	}

    // <------------ update profile into DB ------------>

    const handleProfileUpdate = async() => { // On Submit
        try {
            
            const res = await axios.post('http://localhost:8080/profile', {newProfileData});
            window.localStorage.clear();
            navigate("/login");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
		<>
			<div className="py-[5%] px-[5%] bg-blue2 dark:bg-dark">
				<h1 className="text-blue dark:bg-dark  bg-blue2 text-center font-bold text-4xl pt-[30px] md:text-4xl dark:text-white ">
					Edit Profile
				</h1>

				<div className="mx-[10%] mt-[50px] flex flex-col items-center gap-5 justify-center">
					<div className="flex  justify-left items-center gap-5 ">
						<p className="text-darkBlue dark:bg-dark  bg-blue2 text-center font-medium text-md md:text-xl dark:text-white">
							Name:
						</p>
						<input
							name="name"
							onChange={setInputData}
							value={newProfileData && newProfileData.name}
							className=" w-[500px] text-md font-medium p-3 rounded-md"
						></input>
					</div>
					<div className="flex justify-left items-center gap-5 ">
						<p className="text-darkBlue dark:bg-dark  bg-blue2 text-center font-medium text-md md:text-xl dark:text-white">
							Email:
						</p>
						<input
							name="email"
							onChange={setInputData}
							value={newProfileData && newProfileData.email}
							className=" w-[500px] text-md font-medium p-3 rounded-md"
						></input>
					</div>

					<div className="mt-5 flex gap-5 items-center justify-center">
						<label
							className="font-medium text-xl text-dark dark:text-white mr-2 "
							
						>
							USD Balance:
						</label>

						<input
							name="USD"
							onChange={setInputData}
							value={newProfileData && newProfileData.USD}
							className=" w-[150px] text-md font-medium p-3 rounded-md"
						></input>
					</div>
					<div className="mt-5 flex gap-5 items-center justify-center">
						<label
							className="font-medium text-xl text-dark dark:text-white mr-2 "
						>
							INR Balance:
						</label>

						<input
							name="INR"
							onChange={setInputData}
							value={newProfileData && newProfileData.INR}
							className=" w-[150px] text-md font-medium p-3 rounded-md"
						></input>
					</div>
					<div className="mt-5 flex gap-5 items-center justify-center">
						<label
							className="font-medium text-xl text-dark dark:text-white mr-2 "
						>
							EUR Balance:
						</label>

						<input
							name="EUR"
							onChange={setInputData}
							value={newProfileData && newProfileData.EUR}
							className=" w-[150px] text-md font-medium p-3 rounded-md"
						></input>
					</div>

					
					<button
						onClick={handleProfileUpdate}
						className="font-semibold flex items-center justify-center border-2 border-blue6 rounded-sm py-2.5 px-10 mt-10 mx-auto bg-blue6 text-white hover:text-white hover:border-black hover:bg-black ease-in-out duration-300 dark:bg-blue dark:border-blue dark:hover:bg-dark dark:hover:text-blue"
					>
						Update Profile
					</button>
				</div>
			</div>
		</>
	);
}

export default EditProfile