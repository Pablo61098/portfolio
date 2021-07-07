import React ,  { useState, useEffect, useRef} from 'react'
import {CardStyle, Imagen, Imagen2} from '../../styles/cardsGeneral.style'
import {gsap, Power3, TimelineLite} from 'gsap';
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
    let borderForAnimation = useRef(null)

    
    
    useEffect(() => {
            
            // gsap.from(borderForAnimation, {padding: 20, border: '10px solid black', repeat: -1, repeatDelay: 1})
        // cards.map((card) => {
            if(ImageState === 3){
                let animation = new TimelineLite({paused:true});
                animation.fromTo(borderForAnimation, 0.2, {border: '0'}, {padding: 10, border: '5px dashed #c62ff7'});
                borderForAnimation.animation = animation
                
                gsap.from(card.parentNode, {duration: 1.2, delay: delay, opacity: 0.0, scale: 0.4,  ease: Power3.easeInOut, scrollTrigger: {
                    trigger: card,
                    // start: "5% 20%",
                    // end: "5% 50%",
                    // markers: true,
                    toggleActions: "play none none none",
                }},);
            }else if(ImageState === 1){
                borderForAnimation.animation.play()
            }else if(ImageState === 2){
                console.log("hey")
                borderForAnimation.animation.kill()
                borderForAnimation.animation.reverse()
            }
        // });
    })

    const animationLogos = () => {
        
    }

    
   

    return(
        <CardStyle>
            <div className="template" onMouseLeave={() => changeShowState(2)} onMouseEnter={() => changeShowState(1)} ref={element => card = element}>
                <div className="logo" onMouseEnter={animationLogos} ref={element => logo = element}>
                    <div className="repository" ref={element => repositoryDiv = element} ref={element => borderForAnimation = element}>
                        <a href={project.link} target="_blank" onClick={projectActions[project.actionTitle]} >
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
