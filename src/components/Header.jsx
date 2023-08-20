import React from "react";
import LightLogo from '../assets/light-mode-book-logo.svg'
import DarkLogo from '../assets/dark-mode-book-logo.svg'
import LightToggle from '../assets/light-mode-toggle.svg'
import DarkToggle from '../assets/dark-mode-toggle.svg'


function Header() {
	return (
		<>
			<section className="flex justify-between">
                <div className="flex">
                    <img src={LightLogo} alt="dictionary logo" />
                </div>
                <div className="flex">
                    <select name="" id="">
                        <option value="San Serif">San Serif</option>
                        <option value="San Serif">Serif</option>
                        <option value="Mono">Mono</option>

                    </select>
                    <div className="h-8 border-l-[1px] border-x-d-grey mx-4 "></div>
                    <img src={LightToggle} alt="toggle dark mode" />
                </div>
            </section>
		</>
	);
}

export default Header;
