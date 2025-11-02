import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logoLight from "../assets/logo/logo-light.png";
import logoDark from "../assets/logo/logo-dark.png";
import SignInSection from "../components/SignInSection";
import { socialLinks } from "../Data/data";
const Footer = () => {
    return (
        <footer className="w-[80%] mx-auto">
            <div className="flex flex-col lg:flex-row justify-around items-start mt-20 mb-10 gap-10 ">
                <div className="w-full">
                    {/* hr tag  */}
                    <div>
                        <hr className="h-[0.5px]  bg-gray-800 dark:bg-gray-300  border-0" />
                    </div>

                    {/* logos  */}
                    <div>
                        <div className="mt-6">
                            {/* Light mode logo */}
                            <a href="/">
                                <img
                                    src={logoDark}
                                    alt="BuildLog Logo Light"
                                    className="block dark:hidden w-[140px] h-[40px]"
                                />
                            </a>

                            {/* Dark mode logo */}
                            <a href="/">
                                <img
                                    src={logoLight}
                                    alt="BuildLog Logo Dark"
                                    className="hidden dark:block w-[140px] h-[40px]"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="text-base font-popins">
                        <div className="mt-2 mr-2">
                            <p>
                                Discover narratives that spark curiosity and ignite imagination. Our magazine delivers a
                                thoughtfully curated mix of compelling features, insightful perspectives, and artistic
                                flair. Each page invites you into a vibrant realm of discovery, creativity, and
                                inspiration.
                            </p>
                        </div>

                        <div className="mt-4">
                            <a
                                href="mailto:info@buildlog.com"
                                className=" text-gray-600 dark:text-gray-300 font-popins hover:underline transition-all duration-200"
                            >
                                info@buildlog.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    {/* hr tag  */}
                    <div>
                        <hr className="h-[0.5px]  bg-gray-800 dark:bg-gray-300  border-0" />
                    </div>

                    <div className="flex flex-col justify-center items-center text-base font-NotoSerif mt-10 font-light gap-4">
                        <a href="/" className="hover:underline">
                            About
                        </a>
                        <a href="/" className="hover:underline">
                            Terms of Use
                        </a>
                        <a href="/" className="hover:underline">
                            Privacy Policy
                        </a>
                        <a href="/" className="hover:underline">
                            Cookie Policy
                        </a>
                        <a href="/" className="hover:underline">
                            Cookie Settings
                        </a>
                    </div>
                </div>

                <div className="w-full">
                    {/* hr tag  */}
                    <div>
                        <hr className="h-[0.5px]  bg-gray-800 dark:bg-gray-300  border-0" />
                    </div>

                    <div>
                        <h2 className="text-xl font-NotoSerif mt-6 font-bold">Newsletter</h2>
                        <h3 className="mt-2 font-popins font-light">Join 89,000 subscribers!</h3>
                    </div>

                    <div>
                        <SignInSection />
                    </div>
                </div>
            </div>

            {/* hr tag  */}
            <div>
                <hr className=" h-[1px]  bg-gray-800 dark:bg-gray-300  border-0" />
            </div>

            <div className="flex flex-col md:flex-row gap-y-5 justify-between items-center mt-6 mb-10 ">
                <h4 className="text-sm font-NotoSerif">©2025 BuildLog. All rights reserved.</h4>

                {/* media icons */}
                <div className="flex justify-center items-center space-x-4 text-gray-600 dark:text-gray-300">
                    {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                        <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                            <Icon className={`${hoverColor} cursor-pointer transition-colors duration-200`} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
