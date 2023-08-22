import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
	return (
		<>
			<div className="bg-d-white text-[0.9375rem] leading-6 flex flex-col px-6 pt-6 pb-[5.31rem] font-san-serif">
				{/* Header Section */}
				<h1 className="sr-only">Dictionary Web App</h1>
				<Header />

				{/* Search Section */}
				<SearchBox />

				{/* Play Section */}
				<section></section>

				{/* Content Section */}
				<section></section>

				{/* Source Section */}
				<section></section>
			</div>
		</>
	);
}

export default App;
