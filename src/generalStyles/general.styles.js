import {useEffect, useRef} from 'react'
import styled, {css} from 'styled-components'
import {connect} from 'react-redux';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReduxSection = ({children, margin, down, blur, currentState}) => {
    // console.log('tototo')
    // console.log(currentState)
    let section = useRef(null);


    useEffect(() => {
        
        // console.log("section")
        // console.log(section)
        // TweenMax.to(section, 0, {css: {visibility: 'visible'}})

        // gsap.from(section, {
        //     duration: 3,
        //     y: "100",
        //     opacity: 0,
        //     ease: "ease-in",
            // scrollTrigger: {
            //     trigger: section,
            //     start: "5% 20%",
            //     end: "bottom 50%",
            //     // markers: true,
            //     toggleActions: "restart complete reverse reset",
            // }
        // });
        

    })

    const childrenElement = 
        <div className="trigger showWhenLoadComplete" ref={element => section = element}>
            {children}
        </div>;

    return (
        currentState ? 
        <SectionStylingDark className="section" margin={margin} down={down} blur={blur}>
            {childrenElement}
        </SectionStylingDark> : 
            <SectionStylingBright className="section" margin={margin} down={down} blur={blur}>
            {childrenElement}
        </SectionStylingBright>
        
    );
}

const TitleSectionRedux = ({left, flex, currentState, children}) => {
    // console.log('prob')
    // console.log(currentState)
    let title = useRef(null);


    useEffect(() => {
        gsap.from(title, {duration: 1.2, y: left ? `100px` : `-100px`, opacity:0, ease: Power3.easeInOut, scrollTrigger: {
            trigger: title,
            // start: "5% 20%",
            // end: "bottom 50%",
            // markers: true,
            toggleActions: "play none none none",
        }});
    });
    
    return(
        <TitleSectionEstilo left={left} flex={flex} currentState={currentState}>
            <div className="textTitle" ref={element => title = element}>
                {children}
            </div>
        </TitleSectionEstilo>
    )
}


const stylesSection = css`
    @keyframes out {
        from {box-shadow: 5px 5px 10px #888888,
                    -5px 5px 10px #888888;}
        to {box-shadow: 0}
    }
    
    @keyframes in {
        from {box-shadow: 0}
        to {box-shadow: 5px 10px 30px #c62ff7,
                    -5px 10px 30px #c62ff7;}
    }
    /* margin-top: ${p => p.margin ? `-60px` : ``}; */

    /* border: 2px solid blue; */

    /* -webkit-backdrop-filter: ${p => p.blur ? `blur(10px)` : ``};
    backdrop-filter: ${p => p.blur ? `blur(10px)` : ``}; */    

    .titleSection{
        display: grid;
        grid-template-columns: repeat(8, 12.5%);
        height: 100%;
        align-items: center;
        /* margin-bottom: 25px; */
        /* height: 100%; */
    }

    .title:nth-of-type(1){
        grid-column: 1 / span 2;
        text-align: start;
        color: #FC462F;
        font-family: RobotoMonoRegular;
        font-weight: 800;
    }

    .lineContainer{
    
        grid-column: 3 / span last-line;
        grid-row: 1;
        display:flex;
        /* background-color: blue; */
        height: 100%;
        width: 100%;
        /* background-color: blue; */
        align-items: center;
        .line{
            background-color: blue;
            width: 100%;
            /* height: 100%; */
            border-top: 1px solid #4B4C4D;
            /* align-self: center; */
        }
        
    }    
`;


const showWhenLoadCompleteBright = css`
    .showWhenLoadComplete{
        width: 100%;
        /* visibility: hidden; */

        background-color: #ffff;
        
        /* background-color: #020202; */
        color: #000; /* Here to change color of fonr of all website*/
        
        /* background-repeat: no-repeat; */
        /* background-size: cover; */
        min-height: 100vh;
        /* max-height: 100vh; */
        display: flex;
        flex-direction: ${p => p.down ? `column` : ``};
        /* flex-wrap: wrap; */
        justify-content: center;
        
        align-items: center;
    }
`;

const showWhenLoadCompleteDark = css`
    .showWhenLoadComplete{
        width: 100%;
        /* visibility: hidden; */

        background-color: #020202;
        /* background-color: #020202; */
        
        color: #ffff; /* Here to change color of fonr of all website*/
        
        /* background-repeat: no-repeat; */
        /* background-size: cover; */
        min-height: 100vh;
        /* max-height: 100vh; */
        display: flex;
        flex-direction: ${p => p.down ? `column` : ``};
        /* flex-wrap: wrap; */
        justify-content: center;
        
        align-items: center;
    }
`;


const SectionStylingBright = styled.section`
    ${stylesSection}
    ${showWhenLoadCompleteBright}
`;

const SectionStylingDark = styled.section`
    ${stylesSection}
    ${showWhenLoadCompleteDark}
`;


const TitleSectionEstilo = styled.div`
    font-family: "RubikBold", sans-serif;;
    font-weight: bold;
    font-size: 50px;
    /* font-weight: 900; */
    width: ${p => !p.flex ? `100%` : ``};
    padding: 80px 40px 70px 30px;
    grid-column: 1 / -1;
    text-align: ${p => p.left ? `start` : `end`};
    text-shadow: -2px 10px 10px #969696;
    
    color: ${p => p.currentState ? `#ffff` :`#000`};

    display: flex;
    justify-content: ${p => p.left ? `start` : `flex-end`};;

    .textTitle{
        /* width:fit-content; */
        /* background-color: red; */
        @keyframes change{
            from{}
            to{color: #c62ff7;
                text-shadow: none; }
        }
        @keyframes changeBack{
            from{color: #c62ff7;
                text-shadow: none;}
            to{color: ${p => p.currentState ? `#ffff` : `#000`};
            }
        }
        @media(max-width: 769px){
            padding-left: 0;
            padding-right: 0;
            text-align: center;
            justify-content: center ;
            font-size: min(3rem, 35px);
            /* height: 100px; */
            /* grid-row: 1; */
        }
        &:hover{
            animation-name: change;
            animation-duration: 0.9s;
            animation-fill-mode: forwards;
        }

        animation-name: changeBack;
        animation-duration: 0.9s;
        /* animation-fill-mode: forwards; */
    }
    
    @media(max-width: 769px){
        width: ${p => !p.flex ? `80%` : ``}; 
    }

    transition: 0.5s;
            
`;

const ThinDivision = styled.div`
    width: 80%;
    /* background-color: lightblue; */
    /* justify-content: center; */
    /* display: flex; */
    /* flex-direction: column; */
    max-width: 1000px;

    .titleSection{
        margin-bottom: 70px;
    }
    
`;




const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    // console.log(`hello`)
    // console.log(state)
    return {currentState: currentState}
}

const Section = connect(mapStateToProps)(ReduxSection)
const TitleSection = connect(mapStateToProps)(TitleSectionRedux)


 
export {Section, TitleSection, ThinDivision}