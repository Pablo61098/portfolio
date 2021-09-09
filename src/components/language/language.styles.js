import styled from 'styled-components';

const LanguageStyle = styled.div`

    /* width: 100%;
    height: 100%; */
    /* position: relative; */

    *{
        cursor: pointer;
    }

    .all{
        position: relative;
        display: block;
        width: 60px;
        
        /* height: 100%; */
        
        /* top: 20%; */

        /* position: relative; */
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
        margin: ${ p => p.margin ? `0px 0 0 5vw` : ``};

        
        /* top: 20px; */

        .selected{
            display: flex;
            background-color: #020202;
            border-radius: 15px;
            width: 100%;
            justify-content: center;
            align-items: center;
            &:hover{
                background-color: #424242;
            }
            
        }

        
        .options{
            position: absolute;
            display: none;
            background-color: rgba(249, 249, 255, 0.4);
            width: 100%;
            border-radius: 15px;

            top: 32px;
            
            align-items: center;
            /* background-color: blue; */
            .option{
                display: flex;
                justify-content: center;
                width: 100%;
                border-radius: 15px;
                &:hover{
                    background-color: #424242;
                }
            }
            
        }
    }  
`;

export {LanguageStyle};