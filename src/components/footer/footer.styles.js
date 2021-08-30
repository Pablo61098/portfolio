import styled, {css} from 'styled-components';


const FooterStyles = css`
    font-family: RobotoMonoRegular;
    font-size: 13px;
    width: 100%;
    

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

const FooterStyleDark = styled.div`
    ${FooterStyles}

    background-color: #020202;
    color: #ffff;
`;

const FooterStyleBright = styled.div`
    ${FooterStyles}

    background-color: #fff;
    color: #000;
`;


export {FooterStyleDark, FooterStyleBright};