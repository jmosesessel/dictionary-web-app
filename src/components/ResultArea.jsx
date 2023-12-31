import React from "react";
import PlayLightBtn from "../assets/light-mode-play-btn.svg";
function ResultArea({ isDarkMode, searchDataResult }) {
	//play sound
	const handlePlay = () => {
		let audioFileUrl = null;

		if (searchDataResult && searchDataResult?.phonetics) {
			const audioFileObj = searchDataResult.phonetics.filter((file) => {
				console.log("searchDataResult", file);
				return file.audio !== "";
			});
			if (audioFileObj) {
				audioFileUrl = audioFileObj.shift().audio;
			}
			console.log("audioFileUrl", audioFileUrl);
		}
		// Create an audio element
		const audioElement = new Audio(audioFileUrl);

		audioElement.play().catch((error) => {
			console.error("Error playing audio:", error);
		});
	};

	return (
		<>
			<section className="flex justify-between items-center mb-8">
				<div className="flex flex-col gap-3">
					<h2
						className={`${
							isDarkMode ? "text-d-white" : ""
						} font-[700] text-[2rem]`}
					>
						{searchDataResult?.word}
					</h2>
					<h4 className=" text-d-purple text-[1.125rem]">
						{searchDataResult?.phonetic}
					</h4>
				</div>
				{/* Play Audio */}
				{searchDataResult?.word &&(
					<img
					onClick={handlePlay}
					className="playButton cursor-pointer"
					src={PlayLightBtn}
					alt="play button"
				/>
				)}
				
			</section>

			{/* Display the meanings */}

			{searchDataResult?.meanings.map((meaning, index) => (
				<section
					key={index}
					className={`${
						isDarkMode ? "text-d-white" : ""
					} flex flex-col`}
				>
					<div className="flex gap-4 items-center justify-between mb-[1.125rem]">
						<h4 className=" italic font-semibold text-lg">
							{meaning.partOfSpeech}
						</h4>
						<div className=" bg-d-grey w-full h-[1px]"></div>
					</div>
					<h4 className=" mb-[1.06rem] text-d-deep-grey">Meaning</h4>
					<ul
						className={`${
							isDarkMode ? "text-d-white" : "text-d-light-black"
						}  text-[0.9375rem]  mb-6 mx-6 list-disc list-outside marker:text-d-purple`}
					>
						{meaning.definitions.map((definition, index) => (
							<div key={index}>
								<li className="mb-[0.81rem] list-item">
									{definition.definition}
								</li>
								{definition.example ? (
									<div className=" text-d-deep-grey">
										"{definition.example}"
									</div>
								) : (
									""
								)}
							</div>
						))}
					</ul>

					{/* Display Synonyms */}
					{meaning.synonyms != null && meaning.synonyms.length > 0 ? (
						<div className="flex gap-6 mb-[1.06rem] flex-wrap">
							<h4 className="text-d-deep-grey">Synonyms</h4>
							{meaning.synonyms.map((item, index) => (
								<h5
									className=" text-d-purple font-semibold text-base hover:underline cursor-pointer"
									key={index}
								>
									{item}
								</h5>
							))}
						</div>
					) : (
						""
					)}

					{/* Display Antonyms */}
					{meaning.antonyms != null && meaning.antonyms.length > 0 ? (
						<div className="flex gap-6 mb-[1.06rem] flex-wrap">
							<h4 className="text-d-deep-grey">Antonyms</h4>
							{meaning.antonyms.map((item, index) => (
								<h5
									className=" text-d-purple font-semibold text-base hover:underline cursor-pointer"
									key={index}
								>
									{item}
								</h5>
							))}
						</div>
					) : (
						""
					)}
				</section>
			))}
		</>
	);
}

export default ResultArea;
