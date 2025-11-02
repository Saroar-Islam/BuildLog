import { Outlet, Route, Routes } from "react-router-dom";
import RecentSection from "./RecentSection";
import Navbar from "../components/Navbar";
import FeatureSection from "./FeatureSection";

import { useSearchParams } from "react-router-dom";
import AllPostHeading from "../components/AllPostHeading";
import Breadcrumb from "../components/Breadcrumb";

function Home() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
        <main>
            <section className="mb-24">
                <Navbar />
            </section>

            <section>
                <FeatureSection />
            </section>

            <AllPostHeading category={category} />
            

            {/* outline and Fixed Sidebar */}
            <section className="flex justify-between relative">
                {/* ouline and every */}
                <div className="flex-1">
                    <Outlet />
                    <Outlet />
                    <Outlet />
                    <Outlet />
                    <Outlet />
                    <Outlet />
                    <Outlet />
                </div>

                {/* sidebar  */}
                <div className="pt-20">
                    <RecentSection />
                </div>
            </section>
        </main>
    );
}

export default Home;
