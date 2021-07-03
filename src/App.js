import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home.page';
import About from './pages/about.page';
import Highlights from './pages/highlights.page';
import Projects from './pages/projects.page';
import Header from './components/header.component';
import SocialMediaBar from './components/socialMediaBar.component';
import SkillsTolls from './pages/skillTools.page';
import { Element } from 'react-scroll'
import Footer from './components/footer.component'


function App() {

  const [blurState, setBlurState] = useState(false);

  return (
    <Router>
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
      
    </Router>
  );
}

export default App;
