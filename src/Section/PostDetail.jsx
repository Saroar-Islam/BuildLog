import { useParams } from "react-router-dom";
import { technologyData, businessData, economyData, fashionData, featureData } from "../Data/data";

const allPosts = [...technologyData, ...businessData, ...economyData, ...fashionData, ...featureData];

const PostDetail = () => {
    const { category, slug } = useParams();
    const fullPath = `${category}/${slug}`;

    const post = allPosts.find((p) => p.to === fullPath);

    if (!post) {
        return <div className="text-red-500">Post not found.</div>;
    }

    return (
        <article className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-xs text-blue-600 mb-6">{post.category}</p>
            {/* Add image and content here */}
        </article>
    );
};

export default PostDetail;
