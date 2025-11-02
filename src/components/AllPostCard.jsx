import { Link } from "react-router-dom";

const AllPostCard = ({ title, date, category, image, to }) => (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <Link to={`/${to}`} className="">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{category}</span>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
        </Link>
    </div>
);

export default AllPostCard;
