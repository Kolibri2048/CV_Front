import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    name: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkills>
            <Icon iconId={props.iconId} />
            <SkillTitle>{props.name}</SkillTitle>
        </StyledSkills>
    );
};


const StyledSkills = styled.div `
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    svg {
        width: 100%;
        height: 100%;
        preserveAspectRatio: xMidYMid meet;
`
const SkillTitle = styled.h3 `
    
`

