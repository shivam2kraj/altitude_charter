
import React from 'react';
import menu from '../assets/menu.png'; // Logo for Altitude Charter
import footer from '../assets/footer.png';
import footer1 from '../assets/footer1.png';

function Footer() {
    return (
        <>
        <footer className="bg-black text-white px-4 md:px-8 lg:px-[50px] py-[40px] md:py-[60px] lg:py-[80px] flex flex-wrap justify-between items-start">
            {/* Left Section: Logo and Links */}
            <div className="flex flex-col w-full lg:w-auto lg:flex-row gap-[40px] lg:gap-[150px]">
                {/* Logo Section */}
                <div className="flex flex-col items-start w-full lg:w-auto">
                    <img src={menu} alt="Altitude Charter Logo" className="w-[100px] md:w-[140px] lg:w-[150px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white mb-4" />
                    <div className="text-[22px] md:text-[34px] lg:text-[37px]">CHARTER</div>

                    {/* Follow Us and Sponsored Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8 mt-6 w-full">
                        {/* Follow Us Section */}
                        <div className="flex items-center space-x-4">
                            <div className="text-[16px] md:text-[18px] lg:text-[20px]">Follow Us On:</div>
                            {/* <a href="#"><img src={facebookIcon} alt="Facebook" className="w-[30px] h-[30px]" /></a>
                            <a href="#"><img src={googleIcon} alt="Google" className="w-[30px] h-[30px]" /></a>
                            <a href="#"><img src={twitterIcon} alt="Twitter" className="w-[30px] h-[30px]" /></a>
                            <a href="#"><img src={youtubeIcon} alt="YouTube" className="w-[30px] h-[30px]" /></a> */}
                        </div>

                        {/* Sponsored By Section */}
                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <div className="text-[18px] md:text-[20px] lg:text-[23px]">Sponsored By</div>
                            <img src={footer} alt="ARG/US" className="w-[70px] lg:w-[100px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white" />
                            <img src={footer1} alt="NBAA" className="w-[80px] lg:w-[100px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white" />
                        </div>
                    </div>
                </div>

                {/* Useful Links Section */}
                <div className="flex flex-col mt-8 lg:mt-0">
                    <div className="text-[16px] md:text-[18px] lg:text-[20px] mb-4">Useful Links</div>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                        <li><a href="#" className="hover:underline">Testimonial</a></li>
                        <li><a href="#" className="hover:underline">Book a Flight</a></li>
                    </ul>
                </div>
            </div>

            {/* Right Section: Contact */}
            <div className="flex flex-col mt-8 lg:mt-0 w-full lg:w-auto lg:flex-row gap-[50px] lg:gap-[150px]">
                {/* Contact Section */}
                <div className="flex flex-col">
                    <div className="text-[16px] md:text-[18px] lg:text-[20px]">Reach Us Now</div>
                    <div className="mt-4">631 223 8839</div>
                    <div><a href="mailto:contact@altitudecharter.com" className="hover:underline">contact@altitudecharter.com</a></div>

                    <div className="mt-8 text-[16px] md:text-[18px] lg:text-[20px]">United States</div>
                    <div className="mt-2">
                        Altitude Charter LLC<br />
                        300 Wheeler Rd. Suite 202<br />
                        Hauppauge NY 11788
                    </div>
                </div>
            </div>
        </footer>

        <div className="bg-black text-white text-center py-4 text-[12px] md:text-[15px]">
            © 2024 Copyrights Altitude Charter | All Rights Reserved
        </div>
    </>
    );
}

export default Footer;


