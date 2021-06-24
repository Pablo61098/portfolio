import React from 'react';
import styled from 'styled-components';

const SideMenu = () => {
    const Container = styled.div`
        width: 100vw;
        position: fixed;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: 15;
        /* background-color: cyan; */
        
        display: grid;
        grid-template-columns: repeat(6, 15%);
    `;

    const Blur = styled.div`
        grid-column: 1 / span 3;
        grid-row: 1;
        /* background-color: red; */
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    `;

    const Menu = styled.div`
        grid-column: 4 / span last-line;
        grid-row: 1;
        
        
        display: grid;
        grid-template-rows: 30% repeat(4, 10%) 30% ;
        grid-template-columns: 20% 60% 20%;

        background-color: cyan;
        text-align: center;

        .home{
            grid-row: 2;
        }
        .about{
            grid-row: 3;
        }
        .projects{
            grid-row: 4;
        }
        .menuLink{
            border: 2px solid black;
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
    return (
        <Container>
            <Blur>
                hola
            </Blur>
            <Menu>
                <div className="home menuLink"><p>01.</p><span>Home</span></div>
                <div className="about menuLink"><p>02.</p><span>About</span></div>
                <div className="projects menuLink"><p>03.</p><span>Services</span></div>
                <div className=""></div>
            </Menu>
        </Container>
    )
}

export default SideMenu;