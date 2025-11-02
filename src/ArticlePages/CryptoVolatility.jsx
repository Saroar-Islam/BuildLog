import { cryptocurrencyImg } from "../assets"; // Replace with relevant crypto image if available

const CryptoVolatility = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            {/* Image */}
            <div className="mb-6">
                <img
                    src={cryptocurrencyImg}
                    alt="Cryptocurrency volatility illustration"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
                Cryptocurrency Experiences Volatility as Regulatory Concerns Persist
            </h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">October 19, 2025 · Finance · by Anderson</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    The cryptocurrency market continues to face intense volatility, driven by mounting regulatory
                    scrutiny across major economies. Recent developments—including enforcement actions and policy
                    debates—have triggered sharp price swings in assets like Bitcoin, Ethereum, and Solana.
                </p>

                <h2 className="text-xl font-semibold mt-6">📉 Market Turbulence</h2>
                <p>
                    In October, Solana’s price dropped below the $200 mark, signaling a broader downturn in investor
                    sentiment. Analysts point to profit-taking and uncertainty around U.S. and EU regulatory frameworks
                    as key drivers. Bitcoin also saw abrupt fluctuations following law enforcement actions tied to
                    crypto-related crimes.
                </p>

                <h2 className="text-xl font-semibold mt-6">⚖️ Global Regulatory Pressure</h2>
                <p>
                    Governments worldwide are intensifying efforts to regulate digital assets. In the U.S., the SEC and
                    CFTC are pursuing settlements and reclassification of tokens, while the EU is advancing its Markets
                    in Crypto-Assets (MiCA) framework. Political tensions and Fed nominations have added complexity to
                    the regulatory landscape.
                </p>

                <h2 className="text-xl font-semibold mt-6">💬 Industry Response</h2>
                <p>
                    Crypto firms are advocating for clearer, innovation-friendly guidelines. “We support regulation that
                    protects users and fosters growth,” said a spokesperson from a major exchange. However, they caution
                    that overly aggressive policies could push innovation offshore and reduce access to decentralized
                    finance tools.
                </p>

                <p>
                    As the regulatory debate unfolds, investors are urged to stay informed and manage risk carefully.
                    The coming months may prove pivotal in shaping the future of digital finance.
                </p>
            </article>
        </main>
    );
};

export default CryptoVolatility;
