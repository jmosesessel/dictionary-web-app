import { useEffect, useState } from "react";
import PlayLightBtn from "../assets/light-mode-play-btn.svg";
function ResultArea({ isDarkMode, searchDataResult }) {
	//play sound
	const handlePlay = () => {
		console.log("playing");
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

	useEffect(() => {
		// setDataResult(searchDataResult);
	}, []);
	return (
		<>
			{/* play */}

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
				<img
					onClick={handlePlay}
					className="playButton cursor-pointer"
					src={PlayLightBtn}
					alt="play button"
				/>
			</section>

			{/* noun */}

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

					<div className="flex gap-6 mb-[1.06rem] ">
						<h4 className="text-d-deep-grey">Synonyms</h4>
						<h5 className=" text-d-purple font-semibold text-base">
							electronic keyboard
						</h5>
					</div>
				</section>
			))}
		</>
	);
}

export default ResultArea;
