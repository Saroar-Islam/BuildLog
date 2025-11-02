import { chipShortageImg } from "../assets";

const Crypto = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            <div className="mb-6">
                <img
                    src={chipShortageImg}
                    alt="Social media strategy illustration"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
                Cryptocurrency Experiences Volatility as Regulatory Concerns Persist
            </h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">September 14, 2023 · Business · by Anderson</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    The cryptocurrency market has once again entered a period of heightened volatility, with prices of
                    major digital assets swinging wildly amid growing regulatory scrutiny. Investors and analysts alike
                    are watching closely as governments around the world ramp up efforts to impose clearer frameworks on
                    the crypto industry.
                </p>

                <h2 className="text-xl font-semibold mt-6">📉 Market Turbulence</h2>
                <p>
                    Bitcoin, Ethereum, and other leading cryptocurrencies saw significant drops in value over the past
                    week. Analysts attribute the downturn to renewed discussions in the U.S. Congress about stricter
                    oversight of crypto exchanges and decentralized finance platforms. Similar moves are underway in the
                    European Union and parts of Asia, adding to global uncertainty.
                </p>

                <h2 className="text-xl font-semibold mt-6">⚖️ Regulatory Pressure Mounts</h2>
                <p>
                    Regulators have expressed concerns about consumer protection, money laundering, and the
                    environmental impact of crypto mining. The SEC has hinted at reclassifying certain tokens as
                    securities, which could dramatically alter how they're traded and taxed. Meanwhile, crypto firms are
                    lobbying for clearer guidelines to avoid stifling innovation.
                </p>

                <h2 className="text-xl font-semibold mt-6">💬 Industry Response</h2>
                <p>
                    Industry leaders are calling for collaboration rather than confrontation. “We welcome regulation
                    that protects users and fosters trust,” said a spokesperson from a leading crypto exchange. However,
                    they warn that overly aggressive policies could push innovation offshore and limit access to
                    decentralized financial tools.
                </p>

                <p>
                    As the debate continues, investors are advised to stay informed and cautious. The coming months may
                    prove pivotal in shaping the future of digital finance.
                </p>
            </article>
        </main>
    );
};

export default Crypto;
