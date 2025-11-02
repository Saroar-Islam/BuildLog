import { useState, useEffect, useRef } from "react";
import { FiSearch, FiMenu } from "react-icons/fi"; // Install react-icons if needed
import { FaSun, FaMoon } from "react-icons/fa";

import { navLinks, socialLinks } from "../Data/data";

import logoLight from "../assets/logo/logo-light.png";
import logoDark from "../assets/logo/logo-dark.png";
import HrTag from "./HrTag";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef();

    // Close nav on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.documentElement.classList[storedTheme === "dark" ? "add" : "remove"]("dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList[newTheme === "dark" ? "add" : "remove"]("dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <section className="fixed top-0 z-999 mb-2 bg-whiteMist dark:bg-blackNeutral w-full h-24">
            <nav ref={navRef} className="px-5 md:px-20 mt-2">
                <div className="w-full px-0 py-2 md:py-0 flex justify-between items-center  transition-colors duration-300">
                    <div className="flex justify-around items-center">
                        {/* logos  */}
                        <div>
                            {/* Light mode logo */}
                            <a href="/">
                                <img
                                    src={logoDark}
                                    alt="BuildLog Logo Light"
                                    className="block dark:hidden h-8 w-[120px]"
                                />
                            </a>

                            {/* Dark mode logo */}
                            <a href="/">
                                <img
                                    src={logoLight}
                                    alt="BuildLog Logo Dark"
                                    className="hidden dark:block h-8 w-[120px]"
                                />
                            </a>
                        </div>

                        {/* Desktop Nav */}
                        <div className="max-w-6xl mx-4 px-6 py-4 flex items-center justify-between">
                            <ul className="hidden md:flex flex-wrap space-x-6 text-base font-medium text-gray-700 dark:text-gray-300 font-NotoSerif">
                                {navLinks.map(({ label, to }) => (
                                    <li key={label}>
                                        <Link
                                            to={to}
                                            className="block hover:text-black dark:hover:text-white cursor-pointer transition"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* media , search Icons, theme button */}
                    <div className="flex items-center space-x-4">
                        {/* media icons desktop*/}
                        <div className="hidden md:flex space-x-4 text-gray-600 dark:text-gray-300">
                            {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                                    <Icon className={`${hoverColor} cursor-pointer transition-colors duration-200`} />
                                </a>
                            ))}
                        </div>

                        {/* theme button  desktop*/}
                        <button
                            onClick={toggleTheme}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-yellow-200 shadow-md transition-colors duration-300 cursor-pointer"
                        >
                            {theme === "light" ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* search icon desktop*/}
                        <FiSearch className="text-xl text-gray-700 dark:text-gray-300 cursor-pointer hover:text-black dark:hover:text-white transition" />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        >
                            <FiMenu />
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div>
                    {isOpen && (
                        <div className="pt-4 md:hidden flex space-x-4 flex-col items-center">
                            <HrTag />
                            {/* moblie Social Icons */}
                            <div className="flex justify-center items-center gap-4 text-xl">
                                {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                        aria-label={label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon
                                            className={`${hoverColor} cursor-pointer transition-colors duration-200`}
                                        />
                                    </a>
                                ))}
                            </div>

                            <HrTag />
                            {/* moblie Navigation Links */}
                            <div className="flex ">
                                <ul className="flex flex-col justify-center items-center px-6 pb-4 space-y-2 text-base font-medium w-full mt-1">
                                    {navLinks.map(({ label, to }) => (
                                        <li key={label}>
                                            <Link
                                                to={to}
                                                onClick={() => setIsOpen(false)}
                                                className="block hover:text-black dark:hover:text-white cursor-pointer transition"
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <div className="w-full">
                <hr className="h-[0.5px] mt-5 bg-gray-400  border-0" />
            </div>
        </section>
    );
};

export default Navbar;
