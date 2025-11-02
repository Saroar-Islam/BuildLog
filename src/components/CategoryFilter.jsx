// components/CategoryFilter.tsx
type Props = {
    categories: string[],
    selectedCategory: string,
    onSelect: (category: string) => void,
    className?: string,
};

const CategoryFilter = ({ categories, selectedCategory, onSelect, className }: Props) => {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`px-3 py-1 rounded-full border text-sm transition ${
                        selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-800 dark:bg-gray-700 dark:text-white"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
