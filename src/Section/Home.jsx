import { Outlet } from "react-router-dom";
import RecentSection from "./RecentSection";
import Navbar from "../components/Navbar";
import FeatureSection from "./FeatureSection";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "./Footer";
import { useEffect } from "react";

function Home() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // or "auto" for instant scroll
    }, []);

    return (
        <main>
            <section className="mb-10 md:mb-36 lg:mb-30">
                <Navbar />
            </section>

            <section>
                <FeatureSection />
            </section>

            <section className="w-[80%] mx-auto mt-20 font-popins font-medium">
                <Breadcrumb />
            </section>

            {/* outline and Fixed Sidebar */}
            <section className="flex flex-col xl:flex-row justify-between relative w-[80%] mx-auto gap-6">
                {/* ouline and every */}
                <div className="flex-1">
                    <div>
                        <hr className="h-[0.5px] mb-6 bg-gray-800 dark:bg-gray-300  border-0" />

                        <Outlet />
                    </div>
                </div>

                {/* sidebar  */}
                <div className="">
                    <hr className="h-[0.5px] mb-6 bg-gray-800 dark:bg-gray-300  border-0" />

                    <RecentSection />
                </div>
            </section>

            {/* footerr */}
            <section>
                <Footer />
            </section>
        </main>
    );
}

export default Home;
