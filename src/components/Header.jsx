import { React, useState, useEffect } from "react";
import LightLogo from "../assets/light-mode-book-logo.svg";
import DarkLogo from "../assets/dark-mode-book-logo.svg";
import LightToggle from "../assets/light-mode-toggle.svg";
import DarkToggle from "../assets/dark-mode-toggle.svg";

function Header({ changeFont, currentFont, isDarkMode, setMode }) {
	let [showDropDown, setShowDropDown] = useState(false);

	const options = [
		{ value: "font-san-serif", label: "San Serif" },
		{ value: "font-serif", label: "Serif" },
		{ value: "font-mono", label: "Mono" },
	];

	const handleSelected = (value) => {
		console.log("value", value);
		// hide the dropdown
		setShowDropDown(!showDropDown);
		
		const lab = options.filter((obj) => {
			return obj.value == value;
		});

		changeFont(value);
		console.log("header font change", value, currentFont);
	};

	const handleSelectClick = (e) => {
		e.preventDefault();
		// show the dropdown
		setShowDropDown(!showDropDown);
	};

	const handleClick = (mode) => {
		setMode(!mode);
	};

	return (
		<>
			<div className="">
				<div className="flex justify-between mb-6 ">
					<div className="flex">
						<img
							className="w-[1.75344rem] h-8 "
							src={isDarkMode ? DarkLogo : LightLogo}
							alt="dictionary logo"
						/>
					</div>
					<div className="relative flex justify-between items-center">
						<select
							onClick={handleSelectClick}
							className={`${
								isDarkMode ? "bg-d-black text-d-white" : ""
							} border-none flex gap-5 focus:outline-none focus:border-none focus-visible:ring-0 caret-d-purple cursor-pointer`}
						>
							
							<option hidden value={currentFont}>
								{options
									.filter(
										(option) => option.value === currentFont
									)
									.map(
										(filteredOption) => filteredOption.label
									)}
							</option>
						</select>
						{showDropDown && (
							<ul
								className={`${
									isDarkMode
										? "text-d-white bg-d-black border-d-purple border shadow-d-purple"
										: "bg-d-white shadow-d-lighter-black"
								} shadow-lg z-10 absolute top-8 lg:right-24 mt-1 w-[12.5rem] py-2 rounded-md`}
							>
								<>
									{options.map((option) => (
										<li
											onClick={(e) =>
												handleSelected(option.value)
											}
											className={`${
												isDarkMode
													? " hover:text-d-purple "
													: ""
											}  py-2 px-5 cursor-pointer`}
											key={option.value}
											data-value={option.value}
										>
											{option.label}
										</li>
									))}
								</>
							</ul>
						)}
						<div
							className={` border-d-grey h-8 border-l-[1px] mx-4 `}
						></div>
						<img
							className="cursor-pointer"
							onClick={() => handleClick(isDarkMode)}
							src={isDarkMode ? DarkToggle : LightToggle}
							alt="toggle dark mode"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
