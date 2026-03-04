import styled from "styled-components";
import {SocialLinks} from "../socialLinks.jsx/SocialLinks.tsx";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tech Stack</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>

                <SocialLinks />
            </ul>
        </StyledMenu>

    )
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px
    }

`
