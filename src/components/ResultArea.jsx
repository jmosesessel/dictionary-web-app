import React from "react";
import PlayBtn from "../assets/light-mode-play-btn.svg";
function ResultArea() {
	return (
		<>
			{/* play */}
			<section className="flex justify-between items-center mb-8">
				<div className="flex flex-col gap-3">
					<h2 className="font-[700] text-[2rem]">Keyboard</h2>
					<h4 className=" text-d-purple text-[1.125rem]">
						/ˈkiːbɔːd/
					</h4>
				</div>
				<img src={PlayBtn} alt="play button" />
			</section>

			{/* noun */}
			<section className='flex flex-col'>
				<div className="flex gap-4 items-center justify-between mb-[1.125rem]">
					<h4 className=" italic font-semibold text-lg">noun</h4>
					<div className=' bg-d-grey w-full h-[1px]'></div>
				</div>
                <h4 className=" mb-[1.06rem] text-d-deep-grey">Meaning</h4>
                <ul className=" text-[0.9375rem] text-d-light-black mb-6">
                    <li className="mb-[0.81rem]">(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                    <li className="mb-[0.81rem]">A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                    <li  className="">A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
                </ul>

                <div className="flex gap-6 mb-[1.06rem] ">
                    <h4 className="text-d-deep-grey">Synonyms</h4>
                    <h5 className=" font-semibold text-base">electronic keyboard</h5>
                </div>
			</section>

            {/* verb */}
			<section className='flex flex-col'>
				<div className="flex gap-4 items-center justify-between mb-[1.125rem]">
					<h4 className=" italic font-semibold text-lg">verb</h4>
					<div className=' bg-d-grey w-full h-[1px]'></div>
				</div>
                <h4 className=" mb-[1.06rem] text-d-deep-grey">Meaning</h4>
                <ul className=" text-[0.9375rem] text-d-light-black">
                    <li className="mb-[0.81rem]">To type on a computer keyboard.</li>
                </ul>

                <quote className=" text-d-deep-grey">
                “Keyboarding is the part of this job I hate the most.”
                </quote>
                
			</section>
		</>
	);
}

export default ResultArea;