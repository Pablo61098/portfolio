import styled, {css} from 'styled-components';

const ContainerStyling = css`
    position: ${p => !p.block ? `fixed` : `static`};
    top: 35%;
    left: 20px;
    width: ${p => !p.block ? `40px` : `100%`};
    display: flex;
    
    /* flex-direction: column; */
    flex-flow: ${p => !p.block ? `column` : `row`};
    justify-content: ${p => !p.block ? `center` : `space-around`};
    .socialLink{
        cursor: pointer;

        *{
            /* padding-top: 10px; */
            /* background-color: blue; */
            display: flex;
            justify-content: center;
        }

        @media (max-width: 768px) {
            visibility: ${p => !p.block ? `hidden` : `visible`};
        }   
    }

    .link{
        height: 100%;
        padding-top: 10px;
    }
`;

const ImagenStyling = css`
    width: 30px;
    height: auto;
    padding-bottom: 25px;
    /* background-color: blue; */
    

    animation-name: growBack;
    animation-duration: 0.1s;
    animation-timing-function: linear;

    @keyframes grow {
        from{}
        to{
            width: 35px;
            transform: translateX(5px);
            fill: #c62ff7;
        }
    }

    @keyframes growBack {
        from{width: 35px;
        transform: translateX(5px);}
        to{width: 30px;
        height: auto;}
    }

    &:hover{
        animation-name: grow;
        animation-duration: 0.3s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
`;


const ImagenStylingDark = css`
    .imagen{
        ${ImagenStyling}
        fill: #ffff;
    }
`;
const ImagenStylingBright = css`
    .imagen{
        ${ImagenStyling}
        fill: #000;
    }
`;

const ContainerDark = styled.div`
    ${ContainerStyling}
    ${ImagenStylingDark}

`;

const ContainerBright = styled.div`
    ${ContainerStyling}
    ${ImagenStylingBright}

`;

export {ContainerDark, ContainerBright};