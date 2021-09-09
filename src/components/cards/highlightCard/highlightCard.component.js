import React from 'react'
import {ReactComponent as Play} from '../../../images/play.svg';
import highlightsActions from '../../../actions/highlights.userActions';

import {Thumbnnail, Info, HCardStyle} from './highlightsCard.styles';

const HighlightCard = ({right, title, description, image, technologies, link, actionTitle, key}) => {


    

    return (
        // <Container>
            <HCardStyle>
                
                <Thumbnnail right={right} onClick={highlightsActions[actionTitle]}>
                    <img className="rounded" src={`images/highlights/${image}`} alt="highlight"></img>
                    <div className="overlay rounded">
                        <a href={`${link}`} target="_blank" rel="noopener noreferrer" className="link">
                            <Play className="playButton"></Play>
                        </a>
                    </div>
                    
                </Thumbnnail>
                
                <Info right={right}>
                    <div className="titleProject">
                        {title}
                    </div>
                    <div className="technologies">
                        {technologies ? technologies.map((tech, index) =>  {
                                if (tech === "Express.png" || tech === "CH.png"){
                                    return (<img key={`technologie-${index}`} className='express' src={`images/logos/${tech}`} alt="Tech I used"></img>)
                                }else if(tech === "EJS.png"){
                                    return(<span key={`technologie-${index}`} alt="Tech I used">&lt;%EJS</span>)
                                }else{
                                    return (<img key={`technologie-${index}`} src={`images/logos/${tech}`} alt="Tech I used"></img>)
                                }
                            }) : ``
                        }  
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    {/* <div className="links">
                        <a href={`${link}`} target="_blank" rel="noopener noreferrer">View live</a>
                    </div> */}
                </Info>
            </HCardStyle>
        // </Container>
    )
}


export default HighlightCard;