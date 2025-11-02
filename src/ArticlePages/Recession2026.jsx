import { recessionFearsImg } from "../assets"; // Replace with a relevant image if available

const Recession2026 = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            <div className="mb-6">
                <img
                    src={recessionFearsImg}
                    alt="Global economy illustration"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">Global Recession Fears: What Analysts Are Predicting for 2026</h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">October 23, 2025 · Economy · by Anderson</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    As 2026 approaches, concerns about a potential global recession are intensifying. Economists and
                    financial institutions are issuing cautious forecasts, citing a mix of geopolitical tensions,
                    tightening monetary policies, and sluggish consumer demand as key risk factors. While some regions
                    show resilience, others are already exhibiting signs of economic contraction.
                </p>

                <h2 className="text-xl font-semibold mt-6">📊 Slowing Growth Across Major Economies</h2>
                <p>
                    The International Monetary Fund has revised its global growth outlook downward, pointing to
                    stagnation in Europe and a cooling economy in the United States. China’s post-pandemic recovery has
                    also lost momentum, weighed down by real estate instability and export declines. Emerging markets
                    are grappling with capital outflows and rising debt burdens, further amplifying global uncertainty.
                </p>

                <h2 className="text-xl font-semibold mt-6">💸 Central Banks Walk a Tightrope</h2>
                <p>
                    Central banks worldwide are facing a delicate balancing act. After years of aggressive rate hikes to
                    combat inflation, policymakers are now weighing the risks of overtightening. The U.S. Federal
                    Reserve and European Central Bank have signaled a more cautious stance, but inflation remains
                    stubborn in key sectors like energy and housing.
                </p>

                <h2 className="text-xl font-semibold mt-6">🌍 Geopolitical Risks Add Pressure</h2>
                <p>
                    Ongoing conflicts, trade disputes, and supply chain disruptions continue to rattle investor
                    confidence. Tensions in Eastern Europe and the South China Sea have led to increased defense
                    spending and market volatility. Meanwhile, climate-related disasters are straining infrastructure
                    and insurance systems, adding another layer of economic vulnerability.
                </p>

                <h2 className="text-xl font-semibold mt-6">📣 What Analysts Recommend</h2>
                <p>
                    Financial experts advise businesses and individuals to brace for potential turbulence. Diversifying
                    investments, maintaining healthy cash reserves, and closely monitoring policy shifts are among the
                    top strategies suggested. “It’s not about panic—it’s about preparation,” said one senior economist
                    at a global investment firm.
                </p>

                <p>
                    While a full-scale recession is not guaranteed, the convergence of economic headwinds makes 2026 a
                    year to watch closely. Adaptability and informed decision-making will be crucial as the global
                    economy navigates uncertain terrain.
                </p>
            </article>
        </main>
    );
};

export default Recession2026;
