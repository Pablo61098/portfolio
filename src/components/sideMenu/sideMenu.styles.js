import styled, {css} from 'styled-components';

const MenuSubEntries = css`
    .home{
            grid-row: 2;
    }
    .skills{
        grid-row: 3;
    }
    .about{
        grid-row: 4;
    }
    .projects{
        grid-row: 5;
    }
    .darkMode{
        grid-row: 6;
        border: 0;
    }
    
    .language{
        grid-row: 7;
    }
    .socialMedia{
        grid-row: 8;
    }
    .sections{
        border: 2px solid black;
    }
    .menuLink{
        grid-column: 2;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    p{
        margin: 0 5px;
    }
`;

const MenuStyling = css`
    
        opacity:0;
        grid-column: 4 / span last-line;
        grid-row: 1;
        
        
        display: grid;
        grid-template-rows: 20% repeat(7, 10%) 30% ;
        grid-template-columns: 20% 60% 20%;

        text-align: center;

        ${MenuSubEntries}
        
`;

const MenuStylingDark = css`
    .menu{
        ${MenuStyling}
        background-color: #2a2a2a;
    }
`;

const MenuStylingBright = css`
    .menu{
        ${MenuStyling}
        background-color: #f9f9ff;
    }
`;

const ContainerStyling = css`
    
    width: 100vw;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 15;

    
    /* background-color: cyan; */
    
    grid-template-columns: repeat(6, 15%);

    .blur{
        opacity:0;
        grid-column: 1 / span 3;
        grid-row: 1;
        /* background-color: red; */
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }
`;

const ContainerDarkCollapsed = styled.div`
    ${ContainerStyling}
    display: grid;
    ${MenuStylingDark}
`;

const ContainerBrightCollapsed = styled.div`
    ${ContainerStyling}
    display: grid;
    ${MenuStylingBright}
`;

const ContainerDarkNormal = styled.div`
    ${ContainerStyling}
    display: none;
    ${MenuStylingDark}
`;

const ContainerBrightNormal = styled.div`
    ${ContainerStyling}
    display: none;
    ${MenuStylingBright}
`;

export {ContainerDarkCollapsed, ContainerBrightCollapsed, ContainerDarkNormal, ContainerBrightNormal};