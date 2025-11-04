import logoLight from "../assets/logo/logo-light.png";
import logoDark from "../assets/logo/logo-dark.png";
import { RecentNewsData, socialLinks } from "../Data/data";
import RecentNewsCard from "../components/RecentNewsCard";
import { CgMenuRound } from "react-icons/cg";
import { Link } from "react-router-dom";

const RecentSection = () => {
    return (
        <aside
            className="w-full xl:w-[400px] mx-auto h-screen block sticky top-12 right-0 bg-whiteMist dark:bg-blackNeutral  mb-[310px] mobileM:mb-[180px] mobileL:mb-44 md:mb-48
       "
        >
            {/* logo, tagline, media buttons*/}
            <div className="border-1 border-gray-500 dark:border-gray-600  px-4 py-6 md:py-10 ">
                <div className="flex justify-around items-center">
                    {/* logos  */}
                    <div className=" py-4 md:py-8">
                        {/* Light mode logo */}
                        <a href="/">
                            <img
                                src={logoDark}
                                alt="BuildLog Logo Light"
                                className="block dark:hidden w-[190px] h-[60px]"
                            />
                        </a>

                        {/* Dark mode logo */}
                        <a href="/">
                            <img
                                src={logoLight}
                                alt="BuildLog Logo Dark"
                                className="hidden dark:block w-[190px] h-[60px]"
                            />
                        </a>
                    </div>
                </div>
                <h3 className="mb-8 font-popins text-2xl text-center">“Your daily dose of clarity.”</h3>

                {/* media icons */}
                <div className="flex justify-center items-center space-x-2 text-gray-600 dark:text-gray-300">
                    {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                        <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                            <Icon className={`${hoverColor} cursor-pointer transition-colors duration-200`} />
                        </a>
                    ))}
                </div>
            </div>

            {/* hr tag  */}
            <div>
                <hr className="h-[0.5px] my-6 bg-gray-800 dark:bg-gray-300  border-0" />
            </div>

            {/* recent news section  */}
            <div className="border-1 border-gray-500 dark:border-gray-600  px-4 py-10">
                <div className="flex justify-between items-start  mx-3 mb-5">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 font-NotoSerif">Recent news</h2>
                    </div>

                    <div className="mt-1">
                        <Link
                            to="allpost"
                            className="font-popins text-[12px] text-gray-500 group inline-flex items-center"
                        >
                            <span className="transition-all duration-400 transform group-hover:translate-x-[-30px] group-hover:text-red-600">
                                View All
                            </span>
                            <CgMenuRound className="absolute right-6 h-5 w-5 transform translate-x-[0px] group-hover:translate-x-[-10px] opacity-0 transition-all duration-400  group-hover:opacity-100 group-hover:text-red-600" />
                        </Link>
                    </div>
                </div>
                <hr className="h-[0.5px] mb-10 mx-2 bg-gray-800 dark:bg-gray-300  border-0" />

                <div>
                    {RecentNewsData.map((item, index) => (
                        <ul key={index}>
                            <li>
                                <RecentNewsCard {...item} />
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default RecentSection;
