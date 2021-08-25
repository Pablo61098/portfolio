import React from 'react'
import styled from 'styled-components'
import {Section} from '../../generalStyles/general.styles'


const CardStyle = styled.div`
    /* min-width: 100px; */
    /* width: 40%; */
    min-height: max(396px, 25vw * 1.3);
    border: 2px solid red;
    background-color: red;
    border-radius: 20px;
    justify-self: center;
    grid-column: auto / span 3;
    width: 80%;

    @media(max-width: 769px){
        grid-column: 1 / span last-line;
        width: 80%;
    }
    /* margin-left: 10px; */
    /* margin-top: 10px; */
`;

const ResearchCard = () => {
    return(
        // <Section>
            <CardStyle>
                asf
                asdasdas
                sad
            </CardStyle>
        // </Section>
    )
}


export default ResearchCard;
