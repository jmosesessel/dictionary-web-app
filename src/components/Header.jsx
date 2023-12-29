import { React, useState } from "react";
import LightLogo from "../assets/light-mode-book-logo.svg";
import DarkLogo from "../assets/dark-mode-book-logo.svg";
import LightToggle from "../assets/light-mode-toggle.svg";
import DarkToggle from "../assets/dark-mode-toggle.svg";

function Header({ changeFont, isDarkMode, setMode }) {
	const [selected, setSelected] = useState("san-serif");
	const [selectedLabel, setSelectedLabel] = useState("San Serif")

	let [showDropDown, setShowDropDown] = useState(false);

	const options = [
		{ value: "san-serif", label: "San Serif" },
		{ value: "serif", label: "Serif" },
		{ value: "mono", label: "Mono" },
	];

	const handleSelected = (e) => {
		e.preventDefault();
		//setSelected(value)
		setSelected(e.currentTarget.dataset.value);
		const lab = options.filter(obj=>{
			return obj.value == e.currentTarget.dataset.value
		})
		setSelectedLabel(lab[0].label)
		setShowDropDown(!showDropDown);
		changeFont(e.currentTarget.dataset.value);
	};

	const handleSelectClick = (e) => {
		e.preventDefault();
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
							<option hidden value={selected} >
								{selectedLabel}
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
											onClick={handleSelected}
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
