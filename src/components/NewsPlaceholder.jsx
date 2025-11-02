import { MdOutlineNewspaper } from "react-icons/md";

const NewsPlaceholder = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 bg-white dark:bg-blackNeutral rounded-md border border-gray-300 dark:border-gray-700">
            <MdOutlineNewspaper className="text-5xl text-gray-400 dark:text-gray-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No news uploaded yet</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Stay tuned! News updates will appear here once available.
            </p>
            {/* Optional action button */}
            {/* <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
        Upload News
      </button> */}
        </div>
    );
};

export default NewsPlaceholder;
