import { AuthorData } from "../Data/data";
import { mainArticle, sideArticles } from "../Data/data/";
import { Link } from "react-router-dom";

const FrontPageNews = () => {
    return (
        <section>
            {/* main and side article */}
            <div className="grid grid-row-[auto_auto] gap-6 ">
                {/* Main Article */}

                <Link to={mainArticle.to} className="group">
                    <div className="">
                        <div className="overflow-hidden">
                            <img
                                src={mainArticle.img}
                                alt=""
                                className=" object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 my-2">
                            {mainArticle.title}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {mainArticle.date} · {mainArticle.category} · by {mainArticle.author}
                        </p>
                    </div>
                </Link>

                {/* Side Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 col-span-full mt-6 max-w-6xl  ">
                    {sideArticles.map((article, index) => (
                        <Link to={article.to} key={index} className="group block">
                            <div>
                                <div className="overflow-hidden">
                                    <img
                                        src={article.img}
                                        className="w-full lg:w-fullh h-auto md:h-64 lg:h-52  object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        alt=""
                                    />
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold max-w-64 text-gray-800 dark:text-white my-2 font-NotoSerif">
                                        {article.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {article.date} · {article.category} · by {article.author}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* hr tag  */}
            <div>
                <hr className="h-[0.5px] mt-10 md:mt-20 bg-gray-800 dark:bg-gray-300  border-0" />
            </div>

            {/* editor's pick */}
            <div className="mt-4">
                <h2 className="text-2xl font-semibold mb-4 font-NotoSerif"> Editor's pick</h2>

                {/* author's Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 col-span-full mt-6 max-w-6xl  ">
                    {AuthorData.map((article, index) => (
                        <Link to={article.to} key={index} className="group block">
                            <div>
                                <div className="overflow-hidden">
                                    <img
                                        src={article.image}
                                        className="w-full lg:w-fullh h-auto md:h-64 lg:h-52  object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        alt=""
                                    />
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold max-w-64 text-gray-800 dark:text-white my-2 font-NotoSerif">
                                        {article.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {article.date} · {article.category} · by {article.author}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FrontPageNews;
