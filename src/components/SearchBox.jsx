import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/search-icon.svg";

function SearchBox({ isDarkMode, keyword, searchData }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [wordData, setWordData] = useState(null);
	const [isloading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);
	const [isNotice, setIsNotice] = useState(false);
	const fetchWord = async (searchTerm) => {
		try {
			setIsLoading((prev) => !prev);
			const response = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
			);
			let data;
			if (response.status === 404) {
				setIsNotice((prev) => !prev);
				data = await response.json();
				console.log("data", data);
			} else {
				setIsNotice(false);
				data = await response.json();
				console.log("data", data);
			}
			setWordData(data);
			searchData(data);
			setIsLoading((prev) => !prev);
		} catch (error) {
			console.log("Error response", error.response);
			if (error.response) {
				if (error.response.status === 404) {
					setIsNotice((prev) => !prev);
					setWordData(error.response);
					setIsLoading((prev) => !prev);
				} else if (error.response.status >= 500) {
					setIsNotice((prev) => !prev);
					setIsError("Server error");
					setIsLoading(false);
				} else {
					setIsNotice((prev) => !prev);
					setWordData(error.response);
					setIsLoading(false);
				}
			} else {
				setWordData(error);
				setIsNotice((prev) => !prev);
				setIsError("You are using offline data", error);
				setIsLoading(false);
			}

			/*setTimeout(() => {
            setIsNotice(prev => !prev)
            setWordData(Data);
        }, 10000);*/
		}
	};
	const handleChange = (value) => {
		console.log("search value", value);
		setSearchTerm(value);
	};

	const handleSearch = () => {
		keyword(searchTerm);

		fetchWord(searchTerm);

	};

	//   useEffect(() => {
	//     fetchWord();
	// }, []);

	return (
		<>
			<div
				className={`${
					isDarkMode
						? "bg-d-lighter-black hover:border-d-purple border-d-lighter-black"
						: "bg-d-light-grey border-d-white"
				}  w-full mb-6 flex justify-between gap-2 px-6 pt-[0.88rem] pb-[0.95rem] rounded-2xl hover:border hover:cursor-pointer border `}
			>
				<input
					onChange={(e) => handleChange(e.target.value)}
					className={`${
						isDarkMode
							? " bg-d-lighter-black text-d-white"
							: "bg-d-light-grey"
					}  w-[90%] font-[700] text-base border-none focus:outline-none focus:border-none focus-visible:ring-0 hover:cursor-pointer`}
					type="text"
				/>
				<img
					onClick={handleSearch}
					src={SearchIcon}
					alt="search icon"
				/>
			</div>
		</>
	);
}

export default SearchBox;
