import React from "react";

function Footer({ dataToChild, keyword }) {
  console.log('dataToChild', dataToChild[0])
	return (
		<>
			{dataToChild[0]?.searchDataResult !=null && (
				<section className="border-t-[1px] border-t-d-grey my-8 flex flex-col lg:flex-row gap-2 pt-6 text-sm">
					<h2 className="underline text-d-deep-grey">Source</h2>
					<a
						href={`https://en.wiktionary.org/wiki/${keyword}`}
						className={`${dataToChild[0].isDarkMode ? "text-d-white" : ""}`}
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
