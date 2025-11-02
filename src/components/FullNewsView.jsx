import { useParams } from "react-router-dom";
import Crypto from "../ArticlePages/Crypto";
import SocialMedia from "../ArticlePages/SocialMedia";
import FashionBlogging from "../ArticlePages/FashionBlogging";
import PersonalDevelopmonet from "../ArticlePages/ProfessionalDevelopment";

const topicMap = {
    crypto: <Crypto />,
    socialMedia: <SocialMedia />,
    fashionBlogging: <FashionBlogging />,
    professionalDevelopment: <PersonalDevelopmonet />,
    // Add more topics here
};

const FullNewsView = () => {
    const { topic } = useParams();
    return topicMap[topic] || <div>Topic not found</div>;
};

export default FullNewsView;
