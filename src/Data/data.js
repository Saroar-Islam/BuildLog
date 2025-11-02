import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import {
    chipShortageImg,
    socialMediaSalesImg,
    fashionBloggingImg,
    professionalDevelopmentImg,
    remoteWorkTrendsImg,
    aiRetailExperienceImg,
    sustainableBrandingImg,
    ai_everyday_life,
    cryptocurrencyImg,
    data_analytics,
    selfDriving_car,
    fiveGImg,
    quantumComputing,
    cybersecurity,
    smallBusinessImg,
    ecommerceBoomImg,
    recessionFearsImg,
    interestRatesImg,
    UnemployMarketRecoveryImg,
    digitalFashionImg,
    streetwearEvolutionImg,
    minimalistWardrobesImg,
    slowLivingImg,
    culturalFestivalsImg,
} from "../assets";

export const navLinks = [
    { label: "Home", to: "/", activatable: true },
    { label: "All Post", to: "/allpost", activatable: true, exact: true },
    { label: "Business", to: "/allpost/Business", activatable: true, exact: true },
    { label: "Technology", to: "/allpost/Technology", activatable: true, exact: true },
    { label: "Economy", to: "/allpost/Economy", activatable: true, exact: true },
    { label: "Fashion", to: "/allpost/Fashion", activatable: true, exact: true },
    { label: "Author", to: "/allpost/Author", activatable: true, exact: true },
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
        date: "SEP 2, 2025",
        category: "Business",
        image: chipShortageImg,
        to: "allpost/Business/crypto",
    },
    {
        title: "Leveraging Social Media to Build Relationships and Drive Sales",
        date: "SEP 2, 2025",
        category: "Author",
        image: socialMediaSalesImg,
        to: "allpost/Author/socialMedia",
    },
    {
        title: "The Rise of Fashion Blogging: The Role of Influencers in the Industry",
        date: "SEP 2, 2025",
        category: "Fashion",
        image: fashionBloggingImg,
        to: "allpost/fashion/fashionBlogging",
    },
    {
        title: "The Benefits of Professional Development Programs",
        date: "SEP 2, 2025",
        category: "Author",
        image: professionalDevelopmentImg,
        to: "allpost/Author/professionalDevelopment",
    },
    {
        title: "Remote Work Trends Reshaping Office Culture Worldwide",
        date: "SEP 2, 2025",
        category: "Author",
        image: remoteWorkTrendsImg,
        to: "allpost/Author/socialMedia",
    },
    {
        title: "How AI Is Transforming Customer Experience in Retail",
        date: "SEP 2, 2025",
        category: "Technology",
        image: aiRetailExperienceImg,
        to: "allpost/Technology/crypto",
    },
    {
        title: "Sustainable Branding: Why Eco-Conscious Design Matters",
        date: "SEP 2, 2025",
        category: "Author",
        image: sustainableBrandingImg,
        to: "allpost/Author/socialMedia",
    },
];

export const mainArticle = {
    title: "Self-Driving Cars: Everything You Need to Know",
    img: selfDriving_car,
    category: "Technology",
    author: "Ceridwen",
    date: "September 10, 2023",
    to: "/allpost/Technology/selfDrivingCar",
};

export const sideArticles = [
    {
        title: "Cryptocurrency Experiences Volatility as Regulatory Concerns Persist",
        img: cryptocurrencyImg,
        category: "Business",
        author: "Anderson",
        date: "September 14, 2023",
        to: "/allpost/Business/cryptoVolatility",
    },
    {
        title: "Leveraging Data Analytics for Better Decision-Making in Business",
        img: data_analytics,
        category: "Technology",
        author: "Ceridwen",
        date: "September 13, 2023",
        to: "/allpost/Technology/data_analytics",
    },
    {
        title: "The Rise of AI in Everyday Life",
        img: ai_everyday_life,
        category: "Technology",
        author: "Jordan",
        date: "September 12, 2023",
        to: "/allpost/Technology/theRiseOfAI",
    },
];

// export const frontPageArticleData = [
//     {
//         title: "Self-Driving Cars: Everything You Need to Know",
//         category: "Technology",
//         author: "Ceridwen",
//         date: "September 10, 2023",
//         to: "/News/crypto",
//     },
//     {
//         title: "Cryptocurrency Experiences Volatility as Regulatory Concerns Persist",
//         category: "Business",
//         author: "Anderson",
//         date: "September 14, 2023",
//         to: "/News/socialMedia",
//     },
//     {
//         title: "Leveraging Data Analytics for Better Decision-Making in Business",
//         category: "Business",
//         author: "Ceridwen",
//         date: "September 13, 2023",
//         to: "/News/professionalDevelopment",
//     },
//     {
//         title: "The Rise of AI in Everyday Life",
//         category: "Technology",
//         author: "Jordan",
//         date: "September 12, 2023",
//         to: "/News/crypto",
//     },
// ];

export const technologyData = [
    {
        title: "How AI Is Transforming Customer Experience in Retail",
        date: "SEP 2, 2025",
        category: "Technology",
        image: aiRetailExperienceImg,
        to: "allpost/Technology/crypto",
    },

    {
        title: "Global Chip Shortage to Hurt Computer Firms During Festive Season",
        date: "SEP 2, 2025",
        category: "Technology",
        image: chipShortageImg,
        to: "allpost/Technology/cryptoVolatility",
    },

    {
        title: "Self-Driving Cars: Everything You Need to Know",
        date: "September 10, 2023",
        category: "Technology",
        image: selfDriving_car,
        author: "Ceridwen",
        to: "allpost/Technology/selfDrivingCar",
    },

    {
        title: "Quantum Computing: The Next Frontier in Processing Power",
        date: "OCT 10, 2025",
        category: "Technology",
        image: quantumComputing,
        to: "allpost/Technology/crypto",
    },
    {
        title: "5G Rollout: What It Means for Mobile Innovation",
        date: "NOV 5, 2025",
        category: "Technology",
        image: fiveGImg,
        to: "allpost/Technology/crypto",
    },
    {
        title: "Cybersecurity Trends to Watch in 2021 and Beyond",
        date: "DEC 15, 2025",
        category: "Technology",
        image: cybersecurity,
        to: "allpost/Technology/crypto",
    },
];

export const businessData = [
    {
        title: "Global Chip Shortage to Hurt Computer Firms During Festive Season",
        date: "SEP 2, 2025",
        category: "Business",
        image: chipShortageImg,
        to: "allpost/Business/crypto",
    },

    {
        title: "Remote Work Revolution: How Companies Are Reshaping Office Culture",
        date: "OCT 12, 2025",
        category: "Business",
        image: remoteWorkTrendsImg,
        to: "allpost/Business/crypto",
    },
    {
        title: "Navigating Inflation: Strategies for Small Business Survival",
        date: "NOV 8, 2025",
        category: "Business",
        image: smallBusinessImg,
        to: "allpost/Business/crypto",
    },
    {
        title: "E-Commerce Boom: What It Means for Traditional Retail",
        date: "DEC 3, 2025",
        category: "Business",
        image: ecommerceBoomImg,
        to: "allpost/Business/crypto",
    },
];

export const economyData = [
    {
        title: "Global Recession Fears: What Analysts Are Predicting for 2026",
        date: "SEP 2, 2025",
        category: "Economy",
        image: recessionFearsImg,
        to: "allpost/Economy/recessionFears",
    },
    {
        title: "Central Banks and Interest Rates: A Balancing Act",
        date: "OCT 14, 2025",
        category: "Economy",
        image: interestRatesImg,
        to: "allpost/Economy/recessionFears",
    },
    {
        title: "The Rise of Digital Currencies and Their Economic Impact",
        date: "NOV 9, 2025",
        category: "Economy",
        image: cryptocurrencyImg,
        to: "allpost/Economy/recessionFears",
    },
    {
        title: "Unemployment Trends and Labor Market Recovery Post-Pandemic",
        date: "DEC 1, 2025",
        category: "Economy",
        image: UnemployMarketRecoveryImg,
        to: "allpost/Economy/recessionFears",
    },
];

export const fashionData = [
    {
        title: "The Rise of Fashion Blogging: The Role of Influencers in the Industry",
        date: "SEP 2, 2025",
        category: "Fashion",
        image: fashionBloggingImg,
        to: "allpost/fashion/fashionBlogging",
    },

    {
        title: "Sustainable Branding: Why Eco-Conscious Design Matters",
        date: "SEP 2, 2025",
        category: "Fashion",
        image: sustainableBrandingImg,
        to: "allpost/fashion/fashionBlogging",
    },
    {
        title: "Streetwear Evolution: From Subculture to Global Phenomenon",
        date: "OCT 18, 2025",
        category: "Fashion",
        image: streetwearEvolutionImg,
        to: "allpost/fashion/fashionBlogging",
    },
    {
        title: "The Rise of Digital Fashion in Virtual Spaces",
        date: "NOV 12, 2025",
        category: "Fashion",
        image: digitalFashionImg,
        to: "allpost/fashion/fashionBlogging",
    },
    {
        title: "Minimalist Wardrobes: The Power of Intentional Style",
        date: "DEC 6, 2025",
        category: "Fashion",
        image: minimalistWardrobesImg,
        to: "allpost/fashion/fashionBlogging",
    },
];

export const AuthorData = [
    {
        title: "Leveraging Social Media to Build Relationships and Drive Sales",
        date: "SEP 2, 2025",
        category: "Author",
        image: socialMediaSalesImg,
        to: "allpost/Author/socialMedia",
    },

    {
        title: "Remote Work Trends Reshaping Office Culture Worldwide",
        date: "SEP 2, 2025",
        category: "Author",
        image: remoteWorkTrendsImg,
        to: "allpost/Author/socialMedia",
    },
    {
        title: "The Benefits of Professional Development Programs",
        date: "SEP 2, 2025",
        category: "Author",
        image: professionalDevelopmentImg,
        to: "allpost/Author/professionalDevelopment",
    },
    {
        title: "Sustainable Branding: Why Eco-Conscious Design Matters",
        date: "SEP 2, 2025",
        category: "Author",
        image: sustainableBrandingImg,
        to: "allpost/Author/socialMedia",
    },
    {
        title: "The Art of Slow Living: Finding Joy in Everyday Moments",
        date: "SEP 2, 2025",
        category: "Author",
        image: slowLivingImg,
        to: "allpost/Author/slowLiving",
    },
    {
        title: "Cultural Curiosity: Exploring Forgotten Festivals Around the World",
        date: "SEP 2, 2025",
        category: "Author",
        image: culturalFestivalsImg,
        to: "allpost/Author/culturalFestivals",
    },
];

export const RecentNewsData = [
    {
        title: "Global Chip Shortage to Hurt Computer Firms During Festive Season",
        date: "SEP 2, 2025",
        category: "Business",
        image: chipShortageImg,
        to: "/allpost/Technology/crypto",
    },
    {
        title: "Leveraging Social Media to Build Relationships and Drive Sales",
        date: "SEP 2, 2025",
        category: "Marketing",
        image: socialMediaSalesImg,
        to: "/allpost/Author/socialMedia",
    },
    {
        title: "The Rise of Fashion Blogging: The Role of Influencers in the Industry",
        date: "SEP 2, 2025",
        category: "Fashion",
        image: fashionBloggingImg,
        to: "/allpost/fashion/fashionBlogging",
    },

    {
        title: "Sustainable Branding: Why Eco-Conscious Design Matters",
        date: "SEP 2, 2025",
        category: "Fashion",
        image: sustainableBrandingImg,
        to: "/allpost/author/professionalDevelopment",
    },
];
