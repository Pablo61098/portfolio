import styled from 'styled-components';

const Container = styled.div`
    color: ${p => p.currentState ? `#000` : `#000`};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    font-family: RobotoMonoRegular;
    font-size: 18px;
    font-weight: 800;
    .skills{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-around;
        flex-direction: ${p => p.skills ? `row` : `row-reverse`};
        align-items: space-around;
        width: ${p => p.skills ? `30%` : `20%` };
        margin: 20px 10px;
        background-color: #f9f9ff;
        height: ${p => p.skills ? `100px` : `80px` };
        border-radius: 25px;
        .skill{
            width: 60%;
        }
        .skillsImages{
            width: 20%;
        }
        .both{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 100%;
        }
        @media(max-width: 769px){
            width: 40%;
        }
        @media(max-width: 547px){
            width: 80%;
        }
        .express{
            width: 175%;
        }
    }
`;

export {Container};