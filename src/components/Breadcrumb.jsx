import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter(Boolean);

    const buildPath = (index) => "/" + pathSegments.slice(0, index + 1).join("/");

    return (
        <nav className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            <ol className="flex flex-wrap items-center space-x-2">
                <li>
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                {pathSegments.map((segment, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <span>&raquo;</span>
                        <Link to={buildPath(index)} className="hover:underline capitalize">
                            {decodeURIComponent(segment)}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
