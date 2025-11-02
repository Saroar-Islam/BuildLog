import logoLight from "../assets/logo/logo-light.png";
import logoDark from "../assets/logo/logo-dark.png";

const RecentSection = () => {
    return (
        <aside
            className="w-[400px] h-[60%] hidden md:block sticky top-12 right-0 px-4 py-6 overflow-y-auto bg-whiteMist dark:bg-blackNeutral 
       border-1 border-gray-300 dark:border-gray-600 "
        >
            <div className="flex justify-around items-center">
                {/* logos  */}
                <div className="py-8">
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
            <h3 className="mb-8 font-NotoSerif text-2xl text-center">“Your daily dose of clarity.”</h3>

            <h2 className="text-lg font-semibold mb-4">Recent news</h2>
            <ul className="space-y-4">
                <li>Post 1</li>
                <li>Post 2</li>
                <li>Post 3</li>
            </ul>
        </aside>
    );
};

export default RecentSection;
