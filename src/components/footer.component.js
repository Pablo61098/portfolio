import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import {credits} from '../content/texts.content';

const loadStyles = () => {
    const FooterStyle = styled.div`
        font-family: RobotoMonoRegular;
        font-size: 13px;
        width: 100%;
        background-color: ${p => p.currentState ? `#020202` : `#fff`};
        color: ${p => p.currentState ? `#ffff` : `#000`};

        .content{
            /* width: 100%; */
            display: flex;
            justify-content: center;

            .flow-h{
                display: flex;
                flex-direction: column;
                text-align: center;
            }
            .top{
                margin-top: 15vw;
            }
            .bottom{
                margin-bottom: 30px;
            }
            .text{
                padding: 10px 0;
            }
            a{
                color: #c62ff7;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
            .linkPortfolio{
                color: ${p => p.currentState ? `#ffff` : `#000`};
                &:hover{
                    color: #c62ff7;
                    text-decoration: underline;
                }
            }
        }
    `;

    return {FooterStyle}
}



const Footer = ({currentState, languageState}) => {

    let {FooterStyle} = loadStyles()

    return(
        <FooterStyle currentState={currentState}>
            <div className='content'>
                <div className='flow-h'>
                    <div className="text top">
                        {credits[languageState][0]}<a href="https://github.com/Pablo61098" target="_blank">{credits[languageState][1]}</a>
                    </div>
                    <div className="text bottom">
                        <a className="linkPortfolio" href="https://github.com/Pablo61098/portfolio">
                            {credits[languageState][2]}
                        </a>
                    </div>
                </div>
                
            </div>
        </FooterStyle>
        
    )
}

const mapStateToProps = (state) => {
    const {currentState, alreadyLoaded} = state.darkMode
    const {languageState} = state.language
    return {currentState: currentState, alreadyLoaded: alreadyLoaded, languageState: languageState}
}

export default connect(mapStateToProps, null)(Footer)

