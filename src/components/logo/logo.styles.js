import styled from 'styled-components';

const LogoLayout = styled.div`
    
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
    border-radius: 15px;
    /* width: 65px; */

    display: grid;
    grid-template-columns: repeat(16, 5px);
    grid-template-rows: repeat(13, 5px);

    .squaredFilled{
        background-color: #c62ff7;
        width: 80%;
        height: 100%;
    }   
    .squaredEmpty{
        background-color: transparent;
        width: 80%;
        height: 100%;
    }   
`;

export {LogoLayout};