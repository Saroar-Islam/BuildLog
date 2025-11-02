import { Link } from "react-router-dom";

function RecentNewsCard({ title, date, category, image, to }) {
    return (
        <a href={to} className="block mb-10">
            <div className="flex justify-start items-start rounded-lg ">
                <div className="w-[80px] aspect-square shrink-0 pt-2 ">
                    <img src={image} alt={title} className="w-14 h-14 object-cover rounded-full" />
                </div>
                <div className="flex flex-col justify-center space-y-1 ">
                    <h3 className="text-[14px] font-popins text-neutral-800 dark:text-neutral-100">{title}</h3>
                    <span className="text-[12px] text-gray-500 dark:text-gray-400">
                        {date} · {category}
                    </span>
                </div>
            </div>
        </a>
    );
}

export default RecentNewsCard;
