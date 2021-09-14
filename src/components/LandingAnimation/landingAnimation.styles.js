import styled, {css} from "styled-components";


const LandingStyle = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const LandingStyleDark = styled.div`
    ${LandingStyle}
    background-color: #020202;
`;

const LandingStyleBright = styled.div`
    ${LandingStyle}
    background-color: #ffffff;
`;

export {LandingStyleDark, LandingStyleBright};




