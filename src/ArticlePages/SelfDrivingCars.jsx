import { selfDriving_car } from "../assets"; // Replace with a relevant image

const SelfDrivingCars = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            {/* Image */}
            <div className="mb-6">
                <img
                    src={selfDriving_car}
                    alt="Self-driving car illustration"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">Self-Driving Cars: Everything You Need to Know</h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">October 19, 2025 · Technology · by Anderson</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    Self-driving cars, also known as autonomous vehicles (AVs), are reshaping the future of
                    transportation. While the concept dates back centuries—Leonardo da Vinci sketched a self-propelled
                    cart in the 1500s—the modern pursuit of driverless technology began in earnest during the 1980s with
                    Carnegie Mellon’s pioneering efforts.
                </p>

                <h2 className="text-xl font-semibold mt-6">🚗 How They Work</h2>
                <p>
                    Autonomous vehicles rely on a combination of sensors, cameras, radar, and lidar to perceive their
                    environment. These inputs are processed by onboard computers using AI algorithms to make driving
                    decisions in real time. Advanced systems can detect pedestrians, interpret traffic signals, and
                    navigate complex roadways without human input.
                </p>

                <h2 className="text-xl font-semibold mt-6">📊 Levels of Autonomy</h2>
                <p>
                    The Society of Automotive Engineers (SAE) defines six levels of autonomy, from Level 0 (no
                    automation) to Level 5 (full automation). Most consumer vehicles today operate at Level 2, offering
                    features like adaptive cruise control and lane centering, while Level 4 and 5 remain in testing
                    phases.
                </p>

                <h2 className="text-xl font-semibold mt-6">⚠️ Challenges and Concerns</h2>
                <p>
                    Despite rapid advancements, self-driving cars face hurdles in safety, regulation, and public trust.
                    Edge cases like unpredictable pedestrian behavior or adverse weather conditions can still confuse
                    autonomous systems. Regulatory frameworks vary globally, and liability in accidents remains a legal
                    gray area.
                </p>

                <h2 className="text-xl font-semibold mt-6">🌍 Future Outlook</h2>
                <p>
                    Companies like Tesla, Waymo, and Cruise continue to invest heavily in AV technology. While
                    widespread adoption may take years, autonomous vehicles promise to reduce traffic fatalities,
                    improve mobility for the elderly and disabled, and transform urban planning. The road ahead is
                    long—but the destination could redefine how we move.
                </p>
            </article>
        </main>
    );
};

export default SelfDrivingCars;
