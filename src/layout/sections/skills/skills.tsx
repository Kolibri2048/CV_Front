import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import styled from "styled-components";

type skillTypeSvgProps = {
    id: string,
    name: string,
}

export const Skills = () => {
    const skillTypeSvg:skillTypeSvgProps[] = [
        { id: "gitChubSvg", name: "#" },
        { id: "gitBootstrapSvg", name: "#" },
        { id: "LinkSvg", name: "#" },
    ];


    return (
        <StyledSkills>
            <SectionTitle>SSSS</SectionTitle>
            <FlexWrapper>
                {skillTypeSvg.map((skill) => (
                    <Skill iconId={skill.id} name={skill.name}/>
                ))}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div `
    background-color: #ffe5e4;
    min-height: 100vh;
`



