import styled, {css} from 'styled-components';

const StyleNavbar = css`
    &.active{ //This option is currently not working, header logic was way complicated to make
            //Navbar grow and shrink via JS code, maybe just use css

        @keyframes shrink{
            from{
            }
            to{
                /* height: 60px; */
                box-shadow: ${p => p.currentState ? `0px 10px 10px #c62ff7` : `0px 10px 10px rgba(23, 28, 40, 0.5)`};
                
            }
        }
        animation-name: shrink;
        animation-duration: 0.7s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;


    }
    font-size: 18px;
    position: fixed;
    width: 100%;
    z-index: 30;
    /* z-index: 30; */

    top: 0;

    height: 80px;



    font-family: RubikBold;

    /* background: transparent; */
    /* padding: 0rem calc((100vw - 1300px)/2); */
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom: 2px solid white;


    /* .logo{
        padding-left: 5px;
        padding-right: 5px;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        font-style: italic;
        border-radius: 15px;
        width: 65px;

        display: grid;
        grid-template-columns: repeat(16, 6px);
        grid-template-rows: repeat(13, 6px);

        .logoPS{
            height: auto;
            width: 100%;
        }   
    } */

    .navItems{
        display:flex;
        align-items: center;
        @media (max-width: 769px){
            display: none;
        }
    }



    @media (max-width: 769px){
        justify-content: space-around;
    }



    .navbarLink{
        text-decoration: none;
        padding: 2rem;
    }

    .linkScroll{
        cursor: pointer;
    }

`;

const GlowColorDark = css`
    .glow{
        &:hover{

            animation-name:glowDark;
            animation-duration: 0.2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
        }
        /* transition: 0.5s; */
        animation-name: glowBackDark;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        color: #ffff;
    }

    background-color: #020202;
    color: #ffff;
`;

const GlowColorBright = css`
    .glow{
        &:hover{

            animation-name:glowBright;
            animation-duration: 0.2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
        }
        /* transition: 0.5s; */
        animation-name: glowBackBright;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        color: #000;
    }
    background-color: #ffff;
    color: #000;
`;

const glowAnimationsWhenDark = css`
    @keyframes glowDark{
        from{
        }
        to{
            text-shadow: 0px 10px 10px #c62ff7,0px -10px 10px #c62ff7,-5px 0px 10px #c62ff7,5px 0px 10px #c62ff7,-10px 0px 10px #c62ff7,10px 0px 10px #c62ff7;
            /* background-color: #fff;
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px); */
            color: #ffff;
        }
    }
    @keyframes glowBackDark{
        from{            
            text-shadow: 0px 10px 10px #c62ff7,0px -10px 10px #c62ff7,-5px 0px 10px #c62ff7,5px 0px 10px #c62ff7,-10px 0px 10px #c62ff7,10px 0px 10px #c62ff7;
            color: #ffff;  
        }
        to{
            text-shadow: none;
            color: #ffff;
        }
    }
`;

const glowAnimationsWhenBright = css`
    @keyframes glowBright{
        from{
        }
        to{
            text-shadow: none;
            /* background-color: #fff;
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px); */
            color: #c62ff7;
        }
    }
    @keyframes glowBackBright{
        from{            
            text-shadow: none;
            color: #c62ff7; 
        }
        to{
            text-shadow: none;
            color: #000;
        }
    }
`;


const NavbarDark = styled.nav`
${StyleNavbar}
${GlowColorDark}
${glowAnimationsWhenDark}

`;

const NavbarBright = styled.nav`
${StyleNavbar}
${GlowColorBright}
${glowAnimationsWhenBright}

`;

const Collapsed = styled.button`
    display: none;

    width: 40px;
    height: 40px;
    /* background-color: red; */

    position: fixed;
    right: 0;
    top: 10px;

    justify-self: right;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    min-width: 10px;
    border: 0;
    cursor: pointer;

    @keyframes changeHeader{
        from{}
        to{border: 2px dashed #c62ff7;
        }
    }
    @keyframes changeHeaderBack{
        from{border: 2px dashed #c62ff7;
            }
        to{
            
        }
    }

    &:hover{
        animation-name: changeHeader;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;    
    }

    /* animation-name: changeBack;
    animation-duration: 0.3s; */

    /* justify-self: end; */

    @media (max-width: 769px){
        /* display: inline-block;
        position: static; */
        min-width: 20px;
        min-height: 20px;
        display: flex;
        justify-self: end;
        z-index: ${p => p.menuState ? `20` : `auto`};
    }

    .menuDarkNormal{
        width: 100%;
        fill: #ffff;
    }

    .menuBrightNormal{
        width: 100%;
        fill: #000;
    }

    .menuDarkCollapsed{
        width: 100%;
        fill: #c62ff7;
    }

    .menuBrightCollapsed{
        width: 100%;
        fill: #c62ff7;
    }
`;

export {NavbarDark, NavbarBright, Collapsed};