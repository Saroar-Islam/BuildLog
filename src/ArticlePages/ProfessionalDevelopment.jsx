import { professionalDevelopmentImg } from "../assets"; // adjust path if needed

const ProfessionalDevelopment = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-neutral-800 dark:text-neutral-100">
            {/* Featured Image */}
            <div className="mb-6">
                <img
                    src={professionalDevelopmentImg}
                    alt="Professional development illustration"
                    className="w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">The Benefits of Professional Development Programs</h1>

            {/* Metadata */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">SEP 2, 2020 · Career</p>

            {/* Article Body */}
            <article className="space-y-6 text-[17px] leading-relaxed">
                <p>
                    In a competitive and ever-evolving job market, professional development programs have become
                    essential for individuals seeking growth, adaptability, and long-term success. These programs offer
                    structured learning opportunities that help professionals stay ahead of industry trends and sharpen
                    their skills.
                </p>

                <h2 className="text-xl font-semibold mt-6">📚 Continuous Learning</h2>
                <p>
                    Lifelong learning is no longer optional—it’s a necessity. Development programs provide access to new
                    tools, methodologies, and perspectives that empower individuals to innovate and lead with
                    confidence.
                </p>

                <h2 className="text-xl font-semibold mt-6">🚀 Career Growth</h2>
                <p>
                    Employees who invest in their development often unlock new career paths, promotions, and leadership
                    roles. These programs signal initiative and ambition, making participants more attractive to
                    employers and recruiters.
                </p>

                <h2 className="text-xl font-semibold mt-6">🤝 Building Connections</h2>
                <p>
                    Many programs include collaborative projects, workshops, and networking events. These experiences
                    foster meaningful relationships with peers, mentors, and industry leaders—opening doors to future
                    opportunities.
                </p>

                <p>
                    Whether you're just starting out or looking to elevate your career, professional development
                    programs are a powerful investment in your future. They not only enhance your skill set but also
                    build the confidence and credibility needed to thrive in any professional environment.
                </p>
            </article>
        </main>
    );
};

export default ProfessionalDevelopment;
