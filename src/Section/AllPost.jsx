import { useSearchParams, Link } from "react-router-dom";
import { technologyData, businessData, economyData, fashionData, featureData } from "../Data/data";
import AllPostCard from "../components/AllPostCard";

const categoryMap = {
    Tech: technologyData,
    Business: businessData,
    Economy: economyData,
    Fashion: fashionData,
    Author: featureData,
};

const allPosts = [...technologyData, ...businessData, ...economyData, ...fashionData, ...featureData];

const AllPost = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    const filteredPosts = category ? categoryMap[category] || [] : allPosts;

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-base font-normal font-popins  mb-6 text-gray-800 dark:text-white ">
                {category ? (
                    <span>
                        <Link to="/allpost" className=" hover:underline">
                            All Posts
                        </Link>{" "}
                        &raquo; {category}
                    </span>
                ) : (
                    "All Posts"
                )}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                    <AllPostCard key={index} {...post} />
                ))}
            </div>
        </section>
    );
};

export default AllPost;
