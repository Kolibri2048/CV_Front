import styled from "styled-components";
import photo from '../../../assets/images/avatar.jpg'
import {Icon} from "../../../components/icon/Icon.tsx";
import vectorWhiteSvg from '../../../assets/images/spriteSvg.svg';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain >
            <FlexWrapper justify={"space-around"} align={"flex-start"}>
                <div>
                    <p>Hi 👋,</p>
                    <h2>
                        <span>My name is</span>
                        <span className="highlight"> Herman</span>
                    </h2>
                    <MainTitle>A web developer</MainTitle>
                </div>
                <Wrapper>
                    <Photo src={photo} alt=''/>
                    <ShapeWrapper>
                        <Icon iconId={vectorWhiteSvg} width='100%' height='100%'/>
                    </ShapeWrapper>
                </Wrapper>
            </FlexWrapper>


        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: antiquewhite;
    
`

// const StyledMain = styled.div`
//     min-height: 100vh;
//
// `

const Wrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    
    
`;

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


const ShapeWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
`;

const MainTitle = styled.h1`
`

