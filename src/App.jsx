import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ResultArea from "./components/ResultArea";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="bg-d-white text-[0.9375rem] leading-6 flex flex-col px-6 lg:px-[21.94rem] md:px-10 pt-6 lg:pt-[3.63rem] md:pt-[3.63rem] pb-[5.31rem] font-san-serif">
				{/* Header Section */}
				<h1 className="sr-only">Dictionary Web App</h1>
				<Header />

				{/* Search Section */}
				<SearchBox />

				{/* Play Section */}
				<ResultArea />

				{/* Footer / Source Section */}
				<Footer />
			</div>
		</>
	);
}

export default App;
