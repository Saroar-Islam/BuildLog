import { mainArticle, sideArticles } from "../Data/data/";
import { Link } from "react-router-dom";

const FrontPageNews = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Main Article */}

            <Link to={mainArticle.to}>
                <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-5">
                    <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                        {mainArticle.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {mainArticle.date} · {mainArticle.category} · by {mainArticle.author}
                    </p>
                </div>
            </Link>

            {/* Side Articles */}
            <div className="flex flex-col gap-4">
                {sideArticles.map((article, index) => (
                    <Link to={article.to} key={index}>
                        <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm p-4">
                            <h3 className="text-md font-semibold text-neutral-800 dark:text-neutral-100">
                                {article.title}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {article.date} · {article.category} · by {article.author}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FrontPageNews;
