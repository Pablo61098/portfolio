
import {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/homePage/home.page';
import About from './pages/aboutPage/about.page';
import Highlights from './pages/highlightsPage/highlights.page';
import Projects from './pages/projectsPage/projects.page';
import Header from './components/header/header.component';
import SocialMediaBar from './components/socialMediaBar/socialMediaBar.component';
import SkillsTolls from './pages/skillsToolsPage/skillTools.page';
import Footer from './components/footer/footer.component';
import pageActions from './actions/pages.userActions';
import {connect}  from 'react-redux';
import LandingAnimation from './components/LandingAnimation/landingAnimation.component';




function App({alreadyLoaded}) {

  const [blurState, setBlurState] = useState(false);
  const [loadAnimation, setLoadAnimation] = useState(true);
  // const landingAnimation = LandingAnimation;
  const WholeApp =
   <div>
      <Header blurState={blurState}/>
      {/* <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/services' exact component={Services}/>
      </Switch> */}
      <div id="home">
        <Home />
      </div>
      <div id="skills">
        <SkillsTolls />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="highlights">
        <Highlights  />
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <Footer/>
      <SocialMediaBar/>
    </div>;

  

  
  // console.log(ReactGAInstance)

  useEffect(() => {
    if(!alreadyLoaded){
      pageActions.pageLoaded()
      console.log("hola")
    }

    if(loadAnimation){
      setTimeout(function(){ setLoadAnimation(false); }, 3000);
      // WhatsShowing = <div>Hola</div>;
    }
   
    // console.log("hola2")
  })

  return (
    
    <Router>
      <div>
        {loadAnimation ? <LandingAnimation/> : WholeApp}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  const {currentState, alreadyLoaded} = state.darkMode
  return {currentState: currentState, alreadyLoaded: alreadyLoaded}
}

export default connect(mapStateToProps, null)(App);
