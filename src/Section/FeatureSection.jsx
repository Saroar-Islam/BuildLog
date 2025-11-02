import { featureData } from "../Data/data";
import FeatureCard from "../components/FeatureCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function FeatureSection() {
    return (
        <section className="w-[80%] md:w-[80%] mx-auto py-2">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    // 1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 },
                    1536: { slidesPerView: 4 },
                }}
            >
                {featureData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <FeatureCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default FeatureSection;
