import { socialMediaSalesImg } from "../assets"; // adjust path as needed

const SocialMedia = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            {/* Featured Image */}
            <div className="mb-6">
                <img
                    src={socialMediaSalesImg}
                    alt="Social media strategy illustration"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">Leveraging Social Media to Build Relationships and Drive Sales</h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">SEP 2, 2020 · Marketing</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    In today’s digital-first world, social media has evolved from a mere communication tool into a
                    powerful engine for brand growth and customer engagement. Businesses that understand how to harness
                    its potential are not only building stronger relationships with their audiences—they’re also driving
                    measurable sales.
                </p>

                <h2 className="text-xl font-semibold mt-6">🤝 Building Authentic Connections</h2>
                <p>
                    The heart of social media success lies in authenticity. Brands that engage in genuine conversations,
                    respond to comments, and share behind-the-scenes content foster trust and loyalty. Platforms like
                    Instagram and TikTok allow companies to showcase their personality, while LinkedIn offers a space
                    for thought leadership and professional dialogue.
                </p>

                <h2 className="text-xl font-semibold mt-6">📊 Turning Engagement into Revenue</h2>
                <p>
                    Engagement is great—but conversion is better. By integrating shoppable posts, targeted ads, and
                    influencer partnerships, businesses can guide followers down the sales funnel. Tools like Facebook
                    Pixel and Instagram Insights help track performance and optimize campaigns for better ROI.
                </p>

                <h2 className="text-xl font-semibold mt-6">🎯 Strategy Over Hype</h2>
                <p>
                    While trends come and go, a well-defined strategy ensures long-term success. Brands should identify
                    their target audience, choose the right platforms, and maintain a consistent posting schedule.
                    Content should be tailored to each platform’s strengths—short-form video for TikTok, visual
                    storytelling for Instagram, and professional updates for LinkedIn.
                </p>

                <p>
                    Ultimately, social media is not just about selling—it’s about storytelling. When done right, it
                    becomes a bridge between brand and consumer, turning followers into advocates and likes into lasting
                    loyalty.
                </p>
            </article>
        </main>
    );
};

export default SocialMedia;
