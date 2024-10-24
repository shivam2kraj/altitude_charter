
import React, {useState} from "react";
import menu from "../assets/menu.png";
import Hamburger from "../assets/Hamburger.svg"
import close from "../assets/close.svg"

function Navbar() {

    const [hamburger, setHamburger] = useState(false)


    return (
        <header className="flex z-[999] relative justify-center">
            <div className="flex bg-black text-white w-full justify-between items-center backdrop-blur fixed top-5 px-10 py-2 hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white">
                <img
                    src={menu}
                    className="w-[50px] h-[50px] md:w-[77.26px] md:h-[64px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white"
                    alt="Menu"
                />
                 <img src={Hamburger} onClick={() => setHamburger(!hamburger)} className="hidden max-sm:block" alt="" />

                <nav className={`absolute ${hamburger ? 'translate-0' : 'translate-x-full'} hidden md:flex px-5 py-10 flex-col md:flex-row md:items-center md:gap-8 transition-transform duration-300 hidden max-sm:flex ease-in-out max-[500px]:w-[80%] flex w-[50%] h-[100vh] shadow-[0px_0px_20px_#00000033] px-[20px] py-[40px] flex-col gap-[56px] top-[-20px] right-[-40px]`}>
                <img src={close} onClick={() => setHamburger(!hamburger)} className="w-[40px]" alt="" />
                    <ul className="flex flex-col gap-[12px] text-black font-Jura">
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Aircraft Guide</li>
                        <li>Contact Us</li>
                        <li>Reviews</li>
                        <li>Eng</li>
                    </ul>
                </nav>
            

            {/* Mobile Dropdown */}
            <nav id="mobile-menu" className="flex max-sm:hidden items-center gap-[52px] hover:text-gray-400 transition-all duration-300">
                <ul className="flex gap-[24px]">
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Aircraft Guide</li>
                    <li>Contact Us</li>
                    <li>Reviews</li>
                    <li>Eng</li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Navbar;
