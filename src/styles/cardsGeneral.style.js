import styled from 'styled-components'
import {connect} from 'react-redux'
import {useEffect, useRef} from 'react'

const CardStyleRedux = ({children, currentState}) => {

    
    return (
            <Style  currentState={currentState}>
                {children}
            </Style>
    );
}

const Style = styled.div`
    color: ${p => p.currentState ? `#000` : `#000`};
        background-color: #f9f9ff;
        border-radius: 20px;
        justify-self: center;
        font-family: RobotoMonoRegular;
        font-size: 16px;

        grid-column: auto / span 4;

        width: 80%;
        margin-top: 20px;
        padding: 10px;

        @media(max-width: 1125px){
                grid-column: auto / span 6;
                width: 80%;
        }

        @media(max-width: 769px){
            grid-column: 1 / span last-line;
            width: 80%;
        }

        
        
        animation-name: out;
        animation-duration: 0.3s;

        &:hover{
                animation-name: in;
                animation-duration: 0.3s;
                animation-timing-function: ease-in ease-out;
                animation-fill-mode: forwards;
        }
            /* grid-row: auto; */
            
            /* grid-row: span 4; */

        .template{
            display: grid;
            grid-template-rows: repeat(4, 0.5fr);
            justify-content: space-between;
            /* grid-template-rows: min-content; */
            grid-template-columns: 1;
            height: 100%;
            width: 100%;
            /* background-color: blue; */
            .logo{
                /* background-color: white; */
                grid-row: 1 / 2;
                min-height: 123px;
                max-height: 123px;
                display: flex;
                /* justify-content: space-around; */
                align-items: center;
                justify-content: center;

                height: 100%;
                width: 100%;
                margin-bottom: 10px;
    /* 
                img{
                    width: 80%;
                } */

                @media(max-width: 769px){
                    flex-direction: column;
                }

                .repository{
                    /* height: 100%; */
                    /* background-color: red; */
                    position: relative;
                    width: 30%;
                    margin-inline: 10px;
                    display: flex;
                    justify-content: end;
                    img{
                        width: 100%;
                    }
                    @media(max-width: 769px){
                        width: 20%;
                    }
                }

                .logos{
                    width: 70%;
                    display: flex;
                    justify-content: space-around;
                    /* background-color: blue; */
                    
                    img{
                        width: 20%;
                        /* height: 100%; */
                        margin-inline: 10px;
                        /* background-color: gray; */
                    }   
                }
            }
            
            .title{
                /* background-color: red; */
                grid-row: 2 / 3;
                display: flex;
                /* justify-content: center; */
                align-items: center;
                font-weight: 900;
            }
            .description{
                /* background-color: purple; */
                font-size: 14px;
                grid-row: 3 / 4;
                padding: 20px;
            }
            .techonologies{
                /* background-color: gray; */
                grid-row: 4 / 5;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                
                .tech{
                    margin-inline: 2px;
                    margin-top: 2px;
                    padding: 4px;
                    background-color: rgba(149, 23, 174, 0.7);
                    font-size: 15px;
                    border-radius: 7px;
                    color: ${p => p.currentState ? `#ffff` : `#ffff`};
                }
            }
        }


`

const Imagen = styled.img`
    /* height: 100%;  */
    position: relative;
    top: 0;
    left: 0;
    visibility: ${ p => p.showState === 1   ? `visible` : `hidden`};
`;
    


const Imagen2 = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    visibility: ${ p => p.showState === 2 || p.showState === 3 ? `visible` : `hidden`};
    
`;

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    return {currentState: currentState}
}

const CardStyle = connect(mapStateToProps)(CardStyleRedux)

export {CardStyle, Imagen, Imagen2}