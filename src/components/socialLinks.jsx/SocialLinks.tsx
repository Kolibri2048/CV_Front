import gitIcon from "../../assets/icons/Git.svg";
import gitTwit from "../../assets/icons/Twit.svg";
import gitLink from "../../assets/icons/Link.svg";

export const SocialLinks = () => {
    return (
        <>
            <li><a href=""><img src={gitIcon} alt=''/></a></li>
            <li><a href=""><img src={gitTwit} alt=''/></a></li>
            <li><a href=""><img src={gitLink} alt=''/></a></li>
        </>
    );
};



