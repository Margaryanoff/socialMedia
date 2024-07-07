import Contact1 from "../SVG/Contact1";
import Contact2 from "../SVG/Contact2";
import Contact3 from "../SVG/Contact3";
import Contact4 from "../SVG/Contact4";
import Contact5 from "../SVG/Contact5";
import logo from "../images/loogggggoooo.png";

export const contactsTitle = {
    id: 1,
    title: "Contact Us",
    body: "At ConnectSphere, we value your feedback, questions, and concerns. Our dedicated team is here to assist you with any inquiries and ensure you have the best possible experience on our platform. Whether you need technical support, have suggestions for improvement, or simply want to share your thoughts, we're just a message away.",
    logo: logo,
};

export const contacts = [
    {
        id: 1,
        title: "Customer Support",
        body: `Our customer support team is available 24/7 to help you with any issues you may encounter. From troubleshooting technical problems to answering questions about your account, we're here to ensure your experience on ConnectSphere is seamless and enjoyable.`,
        email: "support@connectsphere.com",
        phone: "1-800-266-6328",
        icon : <Contact1 />
    },
    {
        id: 2,
        title: "Feedback and Suggestions",
        body: `We are always looking for ways to improve ConnectSphere and better serve our community. Your feedback is invaluable in helping us enhance our features, services, and overall user experience. If you have any suggestions or ideas, please let us know.`,
        email: "support@connectsphere.com",
        phone: "1-800-266-6328",
        icon : <Contact2 />
    },
    {
        id: 3,
        title: "Business Inquiries",
        body: `For partnerships, advertising opportunities, and other business-related inquiries, please reach out to our business development team. We are excited to explore potential collaborations that align with our mission and values.`,
        email: "support@connectsphere.com",
        phone: "1-800-266-6328",
        icon : <Contact3 />
    },
    {
        id: 4,
        title: "Media and Press",
        body: `Members of the media are welcome to contact us for press releases, media kits, or interview requests. Our communications team is ready to provide you with the information you need.`,
        email: "support@connectsphere.com",
        phone: "1-800-266-6328",
        icon : <Contact4 />
    },
    {
        id: 5,
        title: "Legal and Privacy",
        body: `If you have questions regarding our terms of service, privacy policy, or need to report any legal issues, please contact our legal department. We are committed to protecting your rights and maintaining a safe environment for all users.`,
        email: "support@connectsphere.com",
        phone: "1-800-266-6328",
        icon : <Contact5 />
    },
];
