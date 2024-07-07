import FacebookSVG from "../../../SVG/FacebookSVG";
import InstagramSVG from "../../../SVG/InstagramSVG";
import TwitterSVG from "../../../SVG/TwitterSVG";
import YoutubeSVG from "../../../SVG/YoutubeSVG";

const WPContacts = () => {
    return (
        <div className="welcome_icons">
            <p>
                <FacebookSVG />
            </p>
            <p>
                <TwitterSVG />
            </p>
            <p>
                <InstagramSVG />
            </p>
            <p>
                <YoutubeSVG />
            </p>
        </div>
    );
};

export default WPContacts;
