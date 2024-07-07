import Feature1 from "../SVG/Feature1";
import Feature2 from "../SVG/Feature2";
import Feature3 from "../SVG/Feature3";
import Feature4 from "../SVG/Feature4";
import Feature5 from "../SVG/Feature5";
import Feature6 from "../SVG/Feature6";
import logo from "../images/loogggggoooo.png";
export const aboutTitle = {
    id: 1,
    image: logo,
    body: `ConnectSphere envisions a world where social media empowers
    individuals to build genuine connections, foster creativity, and
    drive positive change. We aim to bridge the gap between online
    interactions and real-world relationships, creating a harmonious
     blend of digital and personal experiences. By prioritizing user
    well-being, data privacy, and community engagement, we strive to
    be the platform of choice for those seeking a more fulfilling and
    responsible online presence.`,
};
export const about = [
    {
        id: 1,
        title: "Personalized Feed",
        body: `  Our advanced algorithm curates content that matters toyou. Whether it's updates from friends, trendingtopics, or interests you follow, your feed is tailoredto keep you engaged and informed.`,
        icon: <Feature1 />,
    },
    {
        id: 2,
        title: "Enhanced Privacy Controls",
        body: ` Your privacy is our priority. With customizable who sees Our platform employs state-of-the-art encryption tosafeguard your data.`,
        icon: <Feature2 />,
    },
    {
        id: 3,
        title: "Community Building",
        body: `Coin or create communities around shared interests,hobbies, or causes. ConnectSphere offers robust tools for group chats, forums, and events, enabling you to engage with like-minded individuals and foster meaningful connections.`,
        icon: <Feature3 />,
    },
    {
        id: 4,
        title: "Creative Expression",
        body: ` Unleash your creativity with our array of multimedia
        tools. Share photos, videos, and live streams with
        intuitive editing features and interactive filters.
        Our platform supports high-quality content sharing to
        showcase your unique perspective.`,
        icon: <Feature4 />,
    },
    {
        id: 5,
        title: "Authentic Engagement",
        body: `We value authentic interactions over superficial likes
         and shares. Our platform encourages thoughtful
        conversations, insightful comments, and meaningful
        reactions, promoting a culture of genuine engagement.`,
        icon: <Feature5 />,
    },
    {
        id: 6,
        title: "Discoverability",
        body: ` Explore new content, discover trending topics, and
        connect with influencers and creators. Our discovery
        feature ensures you never miss out on what's happening
        in the world and helps you find new interests and
        communities.`,
        icon: <Feature6 />,
    },
];
