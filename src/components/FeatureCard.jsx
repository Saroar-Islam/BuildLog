import { Link } from "react-router-dom";

const FeatureCard = ({ title, date, category, image, to }) => {
    return (
        <Link to={to} className="block">
            <div className="flex justify-start items-start rounded-lg h-[100px] gap-3">
                <div className="w-[80px] aspect-square shrink-0">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-start space-y-1">
                    <h3 className="text-[12px] mobileM:text-sm font-NotoSerif text-neutral-800 dark:text-neutral-100">
                        {title}
                    </h3>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">
                        {date} · {category}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default FeatureCard;
