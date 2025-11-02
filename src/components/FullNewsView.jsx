import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Crypto from "../ArticlePages/Crypto";
import SocialMedia from "../ArticlePages/SocialMedia";
import FashionBlogging from "../ArticlePages/FashionBlogging";
import PersonalDevelopmonet from "../ArticlePages/ProfessionalDevelopment";
import CryptoVolatility from "../ArticlePages/CryptoVolatility";
import SelfDrivingCars from "../ArticlePages/SelfDrivingCars";
import DataAnalytics from "../ArticlePages/DataAnalytics ";
import TheRiseOfAI from "../ArticlePages/TheRiseOfAI";
import Recession2026 from "../ArticlePages/Recession2026";
import NewsPlaceholder from "./NewsPlaceholder";

const topicMap = {
    crypto: <Crypto />,
    socialMedia: <SocialMedia />,
    fashionBlogging: <FashionBlogging />,
    professionalDevelopment: <PersonalDevelopmonet />,
    cryptoVolatility: <CryptoVolatility />,
    selfDrivingCar: <SelfDrivingCars />,
    data_analytics: <DataAnalytics />,
    theRiseOfAI: <TheRiseOfAI />,
    recessionFears: <Recession2026 />,
    // Add more topics here
};

const FullNewsView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // or "auto" for instant scroll
    }, []);

    const { topic } = useParams();
    return topicMap[topic] || <NewsPlaceholder />;
};

export default FullNewsView;
