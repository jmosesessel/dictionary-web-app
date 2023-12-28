import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ResultArea from "./components/ResultArea";
import Footer from "./components/Footer";

function App({ setMode, changeFont, keyword, searchData }) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [currentFont, setCurrentFont] = useState("san-serif");
	const [searchKeyword, setSearchKeyword] = useState("");
	const [searchDataResult, setSearchDataResult] = useState(null);

	// Search Keyword function
	const handleKeywordChange = (keyword) => {
		console.log("app keyword", keyword);
		setSearchKeyword(keyword);
	};
	const dLocalStorage = () => {
		//get localStorage mode and set it to
		let localMode = localStorage.getItem("dIsDarkMode");

		if (localMode == "null") {
			localStorage.setItem("dIsDarkMode", isDarkMode);
			// console.log("localMode is null ...", localMode);
			setIsDarkMode(isDarkMode);
		}

		if (localMode != "null") {
			if (localMode == "true") setIsDarkMode(true);

			if (localMode == "false") setIsDarkMode(false);
		}
	};

	const handleTheme = (setMode) => {
		setIsDarkMode(setMode);
		localStorage.setItem("dIsDarkMode", setMode);
	};

	const handleChangeFont = (changeFont) => {
		setCurrentFont(changeFont);
		console.log("current font", changeFont);
	};

	// function to load the search data
	const handleSearchData = (searchData) => {
		setSearchDataResult(searchData);
		console.log("search Data ....", searchData);
	};

	useEffect(() => {
		dLocalStorage();
	}, [currentFont, isDarkMode]);
	return (
		<>
			<div
				className={`${
					isDarkMode ? "bg-d-black" : "bg-d-white"
				} text-[0.9375rem] leading-6 flex flex-col px-6 lg:px-[21.94rem] md:px-10 pt-6 lg:pt-[3.63rem] md:pt-[3.63rem] pb-[5.31rem] font-${currentFont}`}
			>
				{/* Header Section */}
				<h1 className="sr-only">Dictionary Web App</h1>
				<Header
					isDarkMode={isDarkMode}
					setMode={handleTheme}
					changeFont={handleChangeFont}
				/>

				{/* Search Section */}
				<SearchBox
					isDarkMode={isDarkMode}
					keyword={handleKeywordChange}
					searchData={handleSearchData}
				/>

				{/* Play Section */}
				<ResultArea
					isDarkMode={isDarkMode}
					searchDataResult={searchDataResult}
				/>

				{/* Footer / Source Section */}
				<Footer isDarkMode={isDarkMode} keyword={searchKeyword} />
			</div>
		</>
	);
}

export default App;
