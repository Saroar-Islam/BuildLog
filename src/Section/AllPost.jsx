import { useParams, Link } from "react-router-dom";
import { technologyData, businessData, economyData, fashionData, featureData, AuthorData } from "../Data/data";
import AllPostCard from "../components/AllPostCard";

const categoryMap = {
    Technology: technologyData,
    Business: businessData,
    Economy: economyData,
    Fashion: fashionData,
    Author: AuthorData,
};

const allPosts = [...technologyData, ...businessData, ...economyData, ...fashionData, ...AuthorData];

const AllPost = () => {
    const { category } = useParams();

    // Normalize category to match keys in categoryMap
    const normalizedCategory = category?.charAt(0).toUpperCase() + category?.slice(1).toLowerCase();

    const filteredPosts = normalizedCategory ? categoryMap[normalizedCategory] || [] : allPosts;

    return (
        <section className="max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                    <AllPostCard key={index} {...post} />
                ))}
            </div>
        </section>
    );
};

export default AllPost;
