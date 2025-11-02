import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import {
    chipShortageImg,
    socialMediaSalesImg,
    fashionBloggingImg,
    professionalDevelopmentImg,
    remoteWorkTrendsImg,
    aiRetailExperienceImg,
    sustainableBrandingImg,
} from "../assets";

export const navLinks = [
    { label: "Home", to: "/" },
    { label: "All Post", to: "allPost" },
    { label: "Business", to: "/allpost?category=Business" },
    { label: "Technology", to: "/allpost?category=Tech" },
    { label: "Economy", to: "/allpost?category=Economy" },
    { label: "Fashion", to: "/allpost?category=Fashion" },
    { label: "Author", to: "/allpost?category=Author" },
];

export const socialLinks = [
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: FaFacebookF,
        hoverColor: "hover:text-blue-600",
    },
    {
        label: "Twitter",
        href: "https://twitter.com",
        icon: FaTwitter,
        hoverColor: "hover:text-sky-500",
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: FaInstagram,
        hoverColor: "hover:text-pink-500",
    },
    {
        label: "Pinterest",
        href: "https://pinterest.com",
        icon: FaPinterestP,
        hoverColor: "hover:text-red-600",
    },
];

export const featureData = [
    {
        title: "Global Chip Shortage to Hurt Computer Firms During Festive Season",
        date: "SEP 2, 2020",
        category: "Business",
        image: chipShortageImg,
        to: "News/crypto",
    },
    {
        title: "Leveraging Social Media to Build Relationships and Drive Sales",
        date: "SEP 2, 2020",
        category: "Marketing",
        image: socialMediaSalesImg,
        to: "News/socialMedia",
    },
    {
        title: "The Rise of Fashion Blogging: The Role of Influencers in the Industry",
        date: "SEP 2, 2020",
        category: "Fashion",
        image: fashionBloggingImg,
        to: "News/fashionBlogging",
    },
    {
        title: "The Benefits of Professional Development Programs",
        date: "SEP 2, 2020",
        category: "Career",
        image: professionalDevelopmentImg,
        to: "News/professionalDevelopment",
    },
    {
        title: "Remote Work Trends Reshaping Office Culture Worldwide",
        date: "SEP 2, 2020",
        category: "Workplace",
        image: remoteWorkTrendsImg,
        to: "News/socialMedia",
    },
    {
        title: "How AI Is Transforming Customer Experience in Retail",
        date: "SEP 2, 2020",
        category: "Technology",
        image: aiRetailExperienceImg,
        to: "News/crypto",
    },
    {
        title: "Sustainable Branding: Why Eco-Conscious Design Matters",
        date: "SEP 2, 2020",
        category: "Fashion",
        image: sustainableBrandingImg,
        to: "News/professionalDevelopment",
    },
];

export const mainArticle = {
    title: "Self-Driving Cars: Everything You Need to Know",
    category: "Technology",
    author: "Ceridwen",
    date: "September 10, 2023",
    to: "/News/crypto",
};

export const sideArticles = [
    {
        title: "Cryptocurrency Experiences Volatility as Regulatory Concerns Persist",
        category: "Business",
        author: "Anderson",
        date: "September 14, 2023",
        to: "/News/socialMedia",
    },
    {
        title: "Leveraging Data Analytics for Better Decision-Making in Business",
        category: "Business",
        author: "Ceridwen",
        date: "September 13, 2023",
        to: "/News/professionalDevelopment",
    },
    {
        title: "The Rise of AI in Everyday Life",
        category: "Technology",
        author: "Jordan",
        date: "September 12, 2023",
        to: "/News/crypto",
    },
];

export const frontPageArticleData = [
    {
        title: "Self-Driving Cars: Everything You Need to Know",
        category: "Technology",
        author: "Ceridwen",
        date: "September 10, 2023",
        to: "/News/crypto",
    },
    {
        title: "Cryptocurrency Experiences Volatility as Regulatory Concerns Persist",
        category: "Business",
        author: "Anderson",
        date: "September 14, 2023",
        to: "/News/socialMedia",
    },
    {
        title: "Leveraging Data Analytics for Better Decision-Making in Business",
        category: "Business",
        author: "Ceridwen",
        date: "September 13, 2023",
        to: "/News/professionalDevelopment",
    },
    {
        title: "The Rise of AI in Everyday Life",
        category: "Technology",
        author: "Jordan",
        date: "September 12, 2023",
        to: "/News/crypto",
    },
];

export const technologyData = [
    {
        title: "How AI Is Transforming Customer Experience in Retail",
        date: "SEP 2, 2020",
        category: "Technology",
        // image: aiRetailExperienceImg,
        to: "News/crypto",
    },
    {
        title: "Quantum Computing: The Next Frontier in Processing Power",
        date: "OCT 10, 2020",
        category: "Technology",
        // image: quantumComputingImg,
        to: "News/crypto",
    },
    {
        title: "5G Rollout: What It Means for Mobile Innovation",
        date: "NOV 5, 2020",
        category: "Technology",
        // image: fiveGInnovationImg,
        to: "News/socialMedia",
    },
    {
        title: "Cybersecurity Trends to Watch in 2021 and Beyond",
        date: "DEC 15, 2020",
        category: "Technology",
        // image: cybersecurityTrendsImg,
        to: "security",
    },
];

export const businessData = [
    {
        title: "Global Chip Shortage to Hurt Computer Firms During Festive Season",
        date: "SEP 2, 2020",
        category: "Business",
        // image: chipShortageImg,
        to: "crypto",
    },
    {
        title: "Remote Work Revolution: How Companies Are Reshaping Office Culture",
        date: "OCT 12, 2020",
        category: "Business",
        // image: remoteWorkCultureImg,
        to: "futureOfWork",
    },
    {
        title: "Navigating Inflation: Strategies for Small Business Survival",
        date: "NOV 8, 2020",
        category: "Business",
        // image: inflationStrategiesImg,
        to: "financeTips",
    },
    {
        title: "E-Commerce Boom: What It Means for Traditional Retail",
        date: "DEC 3, 2020",
        category: "Business",
        // image: ecommerceBoomImg,
        to: "retailShift",
    },
];

export const economyData = [
    {
        title: "Global Recession Fears: What Analysts Are Predicting for 2021",
        date: "SEP 2, 2020",
        category: "Economy",
        // image: recessionForecastImg,
        to: "globalTrends",
    },
    {
        title: "Central Banks and Interest Rates: A Balancing Act",
        date: "OCT 14, 2020",
        category: "Economy",
        // image: interestRatePolicyImg,
        to: "monetaryPolicy",
    },
    {
        title: "The Rise of Digital Currencies and Their Economic Impact",
        date: "NOV 9, 2020",
        category: "Economy",
        // image: digitalCurrencyImpactImg,
        to: "cryptoEconomy",
    },
    {
        title: "Unemployment Trends and Labor Market Recovery Post-Pandemic",
        date: "DEC 1, 2020",
        category: "Economy",
        // image: laborMarketRecoveryImg,
        to: "jobMarket",
    },
];

export const fashionData = [
    {
        title: "Sustainable Branding: Why Eco-Conscious Design Matters",
        date: "SEP 2, 2020",
        category: "Fashion",
        // image: sustainableBrandingImg,
        to: "ecoStyle",
    },
    {
        title: "Streetwear Evolution: From Subculture to Global Phenomenon",
        date: "OCT 18, 2020",
        category: "Fashion",
        // image: streetwearEvolutionImg,
        to: "urbanStyle",
    },
    {
        title: "The Rise of Digital Fashion in Virtual Spaces",
        date: "NOV 12, 2020",
        category: "Fashion",
        // image: digitalFashionImg,
        to: "metaWear",
    },
    {
        title: "Minimalist Wardrobes: The Power of Intentional Style",
        date: "DEC 6, 2020",
        category: "Fashion",
        // image: minimalistStyleImg,
        to: "capsuleCloset",
    },
];
