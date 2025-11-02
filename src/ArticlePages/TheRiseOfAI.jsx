// components/TheRiseOfAI.jsx
import { ai_everyday_life } from "../assets"; // Replace with a relevant image

const TheRiseOfAI = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            {/* Image */}
            <div className="mb-6">
                <img
                    src={ai_everyday_life}
                    alt="AI in everyday life illustration"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">The Rise of AI in Everyday Life</h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">October 19, 2025 · Technology · by Anderson</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    Artificial Intelligence (AI) has quietly woven itself into the fabric of our daily routines. From
                    personalized recommendations to smart assistants, AI is no longer a futuristic concept—it’s a
                    present-day reality shaping how we live, work, and interact.
                </p>

                <h2 className="text-xl font-semibold mt-6">🧠 Smarter Homes</h2>
                <p>
                    AI powers smart thermostats, lighting systems, and voice-controlled assistants like Alexa and Google
                    Assistant. These tools learn user preferences over time, optimizing comfort and energy efficiency
                    with minimal input.
                </p>

                <h2 className="text-xl font-semibold mt-6">🚗 Transportation & Mobility</h2>
                <p>
                    From ride-hailing algorithms to autonomous vehicles, AI is transforming how we move. Navigation apps
                    use real-time data to suggest faster routes, while self-driving cars rely on machine learning to
                    interpret road conditions and make split-second decisions.
                </p>

                <h2 className="text-xl font-semibold mt-6">📱 Personalized Experiences</h2>
                <p>
                    Streaming platforms, shopping apps, and social media feeds use AI to curate content tailored to
                    individual tastes. These algorithms analyze behavior to deliver recommendations that feel intuitive
                    and relevant.
                </p>

                <h2 className="text-xl font-semibold mt-6">🏥 Healthcare & Wellness</h2>
                <p>
                    AI assists in diagnostics, patient monitoring, and even mental health support. Wearables track vital
                    signs and alert users to potential issues, while AI-driven platforms help doctors interpret medical
                    images with greater accuracy.
                </p>

                <h2 className="text-xl font-semibold mt-6">🔮 Looking Ahead</h2>
                <p>
                    As AI continues to evolve, its integration into everyday life will deepen. Ethical considerations,
                    transparency, and accessibility will be key to ensuring that AI benefits everyone—not just the
                    tech-savvy few.
                </p>
            </article>
        </main>
    );
};

export default TheRiseOfAI;
