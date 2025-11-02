import { fashionBloggingImg } from "../assets";

const FashionBlogging = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            {/* Featured Image */}
            <div className="mb-6">
                <img
                    src={fashionBloggingImg}
                    alt="Fashion blogging and influencer culture"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
                The Rise of Fashion Blogging: The Role of Influencers in the Industry
            </h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">SEP 2, 2020 · Fashion</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    Fashion blogging has transformed from a niche hobby into a global phenomenon, reshaping how trends
                    are discovered, shared, and consumed. At the heart of this evolution lies the influencer—individuals
                    who blend personal style with digital savvy to build loyal followings and shape the industry’s
                    direction.
                </p>

                <h2 className="text-xl font-semibold mt-6">👗 From Street Style to Global Stage</h2>
                <p>
                    What began as street-style snapshots and outfit diaries has grown into full-fledged media empires.
                    Influencers now attend fashion weeks, collaborate with luxury brands, and even launch their own
                    labels. Their ability to connect directly with audiences gives them a unique edge over traditional
                    fashion media.
                </p>

                <h2 className="text-xl font-semibold mt-6">📱 The Power of Platforms</h2>
                <p>
                    Instagram, TikTok, and YouTube have become the new runways. These platforms allow influencers to
                    showcase their style, share behind-the-scenes content, and engage with followers in real time.
                    Algorithms and hashtags help amplify reach, turning a single post into a viral trend.
                </p>

                <h2 className="text-xl font-semibold mt-6">💼 Business Meets Creativity</h2>
                <p>
                    Fashion influencers are not just tastemakers—they’re entrepreneurs. Sponsored content, affiliate
                    marketing, and brand partnerships have created new revenue streams. Many influencers now operate as
                    full-time businesses, with teams managing content, strategy, and collaborations.
                </p>

                <p>
                    As fashion blogging continues to evolve, its influence on consumer behavior, brand identity, and
                    cultural trends will only grow. The future of fashion is not just on the runway—it’s in your feed.
                </p>
            </article>
        </main>
    );
};

export default FashionBlogging;
