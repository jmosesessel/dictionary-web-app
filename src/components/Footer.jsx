import React from "react";

function Footer({ isDarkMode, keyword }) {
	return (
		<>
			{keyword && (
				<section className="border-t-[1px] border-t-d-grey my-8 flex flex-col lg:flex-row gap-2 pt-6 text-sm">
					<h2 className="underline text-d-deep-grey">Source</h2>
					<a
						href={`https://en.wiktionary.org/wiki/${keyword}`}
						className={`${isDarkMode ? "text-d-white" : ""}`}
						target="_blank"
					>
						https://en.wiktionary.org/wiki/{keyword}
					</a>
				</section>
			)}
		</>
	);
}

export default Footer;
