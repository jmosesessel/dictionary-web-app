import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/search-icon.svg";

function SearchBox({ isDarkMode, setKeyword, searchData}) {
	const [searchTerm, setSearchTerm] = useState("keyboard");
	

	

	const handleChange = (value) => {
		setSearchTerm(value)
		console.log('searchTerm', searchTerm)
		setKeyword(value);
	};

	const handleSearch = () => {
		searchData(searchTerm)
	};

	

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
					value={searchTerm}
					className={`${
						isDarkMode
							? "bg-d-lighter-black text-d-white"
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
