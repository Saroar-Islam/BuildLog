import { useParams, useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
    const { category } = useParams();
    const location = useLocation();

    // Only show breadcrumb if we're on /allpost or deeper
    const isAllPostRoute = location.pathname.startsWith("/allpost");

    if (!isAllPostRoute) return null;

    const normalizedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase() : "";

    return (
        <nav className="text-gray-800 dark:text-gray-300 mb-6">
            <ol className="flex items-center space-x-2">
                <li>
                    <span>&raquo; </span>
                    <span>
                        <Link to="/allpost" className="hover:underline">
                            All News
                        </Link>
                    </span>
                </li>

                {normalizedCategory && (
                    <li className="flex items-center space-x-3">
                        <span>&raquo;</span>
                        <Link to={`/allpost/${normalizedCategory}`} className="hover:underline capitalize">
                            {normalizedCategory}
                        </Link>
                    </li>
                )}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
