import {Icon} from "../icon/Icon.tsx";


type socialLinksSvgType = {
    id: string,
    url: string,
}

export const SocialLinks = () => {

    const socialLinks:socialLinksSvgType[] = [
        { id: "gitSvg", url: "#" },
        { id: "twitSvg", url: "#" },
        { id: "LinkSvg", url: "#" },
    ];

    return (
        <ul>
            {socialLinks.map((item) => (
                <li key={item.id}>
                    <a href={item.url}>
                        <Icon iconId={item.id} width={'30px'} height={'30px'} />
                    </a>
                </li>
            ))}
        </ul>
    );
};



