import React ,  { useState, useEffect, useRef} from 'react'
import {CardStyle, Imagen, Imagen2} from '../../styles/cardsGeneral.style'
import {gsap, Power3} from 'gsap';
import projectActions from '../../actions/projects.userActions';


const ProjectsCard = ({project, delay}) => {

    const [ImageState, setImageState] = useState(3);

    const changeShowState = (setValue) => {
        setImageState(setValue)
    }

    let card = useRef(null)
    let repositoryDiv = useRef(null)
    let logo = useRef(null)
    let techImages = []

    useEffect(() => {
        // cards.map((card) => {
            if(ImageState === 3){
                gsap.from(card.parentNode, {duration: 1.2, delay: delay, opacity: 0.0, scale: 0.4,  ease: Power3.easeInOut, scrollTrigger: {
                    trigger: card,
                    // start: "5% 20%",
                    // end: "5% 50%",
                    // markers: true,
                    toggleActions: "play none none none",
                }},);
            }
        // });
    })

    const animationLogos = () => {
        
    }

    
   

    return(
        <CardStyle>
            <div className="template" onMouseLeave={() => changeShowState(2)} onMouseEnter={() => changeShowState(1)} ref={element => card = element}>
                <div className="logo" onMouseEnter={animationLogos} ref={element => logo = element}>
                    <div className="repository" ref={element => repositoryDiv = element}>
                        <a href={project.link} target="_blank" onClick={projectActions[project.actionTitle]}>
                            <Imagen src="images/logos/github.png"  showState={ImageState} className="insideImg1"></Imagen>
                            <Imagen2 src="images/logos/folder.png"  showState={ImageState} className="insideImg2"></Imagen2>
                        </a>
                    </div>
                    <div className="logos" >
                        {project.images.map((img, key) => (
                            
                            <img src={`images/logos/${img}`} key={key} ref={element => techImages.push(element)}></img>
                            
                        ))}
                    </div>
                </div>
                <div className="title">
                    {project.title}
                </div>
                <div className="description">
                        {project.description}
                    </div>
                <div className="techonologies">
                    { project.technologies.map((tech, index) => (
                        <div key={`projectTech-${index}`} className="tech">{tech}</div>
                    )) }
                </div>
            </div>
            
        </CardStyle>
    )
}


export default ProjectsCard
