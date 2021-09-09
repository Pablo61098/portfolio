import styled from 'styled-components';

const Toogle = styled.div`
    .switch{
        position: relative;
        display: block;
        width: 60px;
        height: 40px;
    }

    .slider{
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background: white;
        transition: 0.5s;
        border: 3px solid #9517ae;
        /* box-shadow: 1px 1px 1px rgba(0,0,0,0.1); */
    }

    .switch input {
        display: none;
    }

    .slider:before{
        position: absolute;
        content: "";
        bottom: 40%;
        left: 0%;
        background-color: gray;
        transition: 0.5s;
    }

    input:checked + .slider{
        background-color: black;
    }

    input:checked + .slider:before{
        transform: translateX(120%) rotateZ(135deg);
        background: #c62ff7;
        top: 40%;
    }

    .slider.round{
        border-radius: 35px;
    }

    .slider.round:before{
        width: 43%;
        height: 43%;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        transform: rotateZ(-55deg);
    }  
    /* transition: 0.5s; */
`;

const Label = styled.label``;

export {Toogle, Label};