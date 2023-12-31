import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/search-icon.svg";

function SearchBox({ isDarkMode, setKeyword, searchData }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [placeholderText, setPlaceholderText] = useState(
		"Search for any word…"
	);
	const [searchEmptyText, setSearchEmptyText] = useState(
		"Whoops, can’t be empty…"
	);
	const [showErrorText, setShowErrorText] = useState(false);

	const handleChange = (value) => {
		setSearchTerm(value);
		console.log("searchTerm", searchTerm);
		setKeyword(value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		const errorText = document.querySelector(".input-box-wrap");
		// if input is empty, set border: 1px solid #FF5252;
		if (searchTerm == "") {
			// get the error text

			errorText.style.border = "1px solid #FF5252";
			setShowErrorText(true);
		} else {
			searchData(searchTerm);
			errorText.style.border = isDarkMode
				? "1px solid #3A3A3A"
				: "1px solid #FFFFFF";

			setShowErrorText(false);
		}
	};

	return (
		<>
			<form action="" onSubmit={handleSearch}>
				<div
					className={`${
						isDarkMode
							? "bg-d-lighter-black hover:border-d-purple border-d-lighter-black"
							: "bg-d-light-grey border-d-white"
					} input-box-wrap w-full flex justify-between gap-2 px-6 pt-[0.88rem] pb-[0.95rem] rounded-2xl hover:border hover:cursor-pointer border `}
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
						placeholder={placeholderText}
					/>
					<img
						onClick={handleSearch}
						src={SearchIcon}
						alt="search icon"
					/>
				</div>
				{showErrorText && (
					<h6 className="error-empty-text d-none text-d-red text-[1.25rem] ">
						{searchEmptyText}
					</h6>
				)}
			</form>
		</>
	);
}

export default SearchBox;
