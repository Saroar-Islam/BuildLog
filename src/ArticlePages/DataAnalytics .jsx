// components/DataAnalytics.jsx
import { data_analytics } from "../assets"; // Make sure this image exists in your assets folder

const DataAnalytics = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            {/* Image */}
            <div className="mb-6">
                <img
                    src={data_analytics}
                    alt="Data analytics illustration"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
                Leveraging Data Analytics for Better Decision-Making in Business
            </h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">October 19, 2025 · Strategy · by Anderson</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    In today’s fast-paced business environment, data analytics has become a cornerstone of strategic
                    decision-making. Organizations that harness the power of data can uncover patterns, predict
                    outcomes, and make more informed choices.
                </p>

                <h2 className="text-xl font-semibold mt-6">📊 Why It Matters</h2>
                <p>
                    Data analytics enables companies to move beyond intuition and base decisions on evidence. From
                    customer behavior to operational efficiency, analytics provides clarity and confidence in every
                    department.
                </p>

                <h2 className="text-xl font-semibold mt-6">🧠 Key Applications</h2>
                <p>
                    Businesses use analytics for sales forecasting, marketing optimization, risk management, and product
                    development. These insights help teams adapt quickly and stay competitive in dynamic markets.
                </p>

                <h2 className="text-xl font-semibold mt-6">🏗 Building a Data Culture</h2>
                <p>
                    Success with analytics requires more than tools—it demands a culture of data literacy and
                    collaboration. Empowering teams to understand and act on data is essential for long-term impact.
                </p>

                <h2 className="text-xl font-semibold mt-6">🚀 Looking Ahead</h2>
                <p>
                    As AI and machine learning evolve, businesses will gain deeper predictive capabilities. The future
                    lies in real-time analytics and adaptive strategies that respond instantly to change.
                </p>
            </article>
        </main>
    );
};

export default DataAnalytics;
