import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ResultArea from "./components/ResultArea";
import Footer from "./components/Footer";
import WordNotFound from "./components/WordNotFound";

function App({ setMode, changeFont, searchData }) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [currentFont, setCurrentFont] = useState("san-serif");
	const [searchKeyword, setSearchKeyword] = useState("keyboard");
	const [searchDataResult, setSearchDataResult] = useState(null);
	// const [wordData, setWordData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isErrorTitle, setIsErrorTitle] = useState("");
	const [isErrorResolution, setIsErrorResolution] = useState("");
	const [isErrorMsg, setIsErrorMsg] = useState("");

	// Search Keyword function
	const handleKeywordChange = (keyword) => {
		console.log("app keyword", keyword);
		setSearchKeyword(keyword);
		// fetchWord(searchKeyword);
	};

	// fetch the data
	const fetchWord = async (term) => {
		setIsLoading(true);
		setIsError(false);
		setIsErrorMsg("");
		setIsErrorTitle("");
		setIsErrorResolution("");
		setSearchDataResult(null);

		try {
			const response = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${term.toLowerCase()}`
			);
			const data = await response.json();

			console.log("data", data);
			if (response.status == 404) {
				console.log("404", response, data.title);
				setIsError(true);
				setIsErrorTitle(data.title);
				setIsErrorMsg(data.message);
				setIsErrorResolution(data.resolution);
			} else {
				// setWordData(data);
				setSearchDataResult(data[0]);
				setIsError(false);
				setIsErrorMsg("");
				setIsErrorResolution("");
			}
		} catch (error) {
			console.log("error", error);
			if (error.response && error.response.status === 404) {
				setIsError(true);
				setIsErrorMsg(error.response.message);
			} else if (error.response && error.response.status >= 500) {
				setIsErrorMsg("Server error");
			} else {
				setIsError(true);
				setIsErrorMsg("Ops! Some");
			}
		} finally {
			// setIsLoading(false);
			// setIsError(true);
			// setIsErrorMsg("");
		}
	};

	// Set initial dark mode value from the localStorage
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
		setSearchKeyword(searchData);
		console.log("search Data ....", searchKeyword);
		fetchWord(searchKeyword);
	};

	useEffect(() => {
		dLocalStorage();
		fetchWord(searchKeyword);
	}, []);
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
					setKeyword={handleKeywordChange}
					searchData={handleSearchData}
				/>

				{/* Not Found Section */}
				{isError == true ? (
					<WordNotFound
						ErrorData={[
							{
								errorTitle: isErrorTitle,
								errorMsg: isErrorMsg,
								isErrorResolution: isErrorResolution,
								isDarkMode: isDarkMode,
							},
						]}
					/>
				) : (
					<ResultArea
						isDarkMode={isDarkMode}
						searchDataResult={searchDataResult}
					/>
				)}

				{/* Footer / Source Section */}
				<Footer isDarkMode={isDarkMode} keyword={searchKeyword} />
			</div>
		</>
	);
}

export default App;
