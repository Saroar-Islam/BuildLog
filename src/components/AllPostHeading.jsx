// components/AllPostHeading.jsx
import { Link } from "react-router-dom";

const AllPostHeading = ({ category }) => (
    <h2 className="text-base font-normal font-popins mb-6 text-gray-800 dark:text-white">
        {category ? (
            <span>
                <Link to="/allpost" className="hover:underline">
                    All Posts
                </Link>{" "}
                &raquo;
                <Link to="/allpost/:category" className="hover:underline">
                    {category}
                </Link>{" "}
            </span>
        ) : (
            "All Posts"
        )}
    </h2>
);

export default AllPostHeading;
