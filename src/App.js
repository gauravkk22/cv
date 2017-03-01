import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import BasicDetail from './components/basic_details.js';
import WorkExperience from './components/work_experience.js';
import SkillSets from './components/skill_sets.js';
import Hobbies from './components/hobbies.js';
import Connect from './components/connect.js';
import Typist from 'react-typist';

class App extends Component {
  render() {
    return (
      <div className="App" id="root">
        <div className="header animated fadeInDown">
          <p className="description_text">
            <div className="left_text">
              <Typist
                avgTypingSpeed={60}
                startDelay={2000}
                cursor={{ hideWhenDone: true }}>
                <div className="text_one">HEY !! I AM</div>
                <span className="my_name">GAURAV</span>
              </Typist>
            </div>
            <div className="center_text">
                  <span className="text_two">&</span>
            </div>
            <div className="right_text">
              <Typist
                avgTypingSpeed={40}
                startDelay={4000}>
                <span className="text_three">I AM A <span className="webdeveloper_text">WEB DEVELOPER</span></span>
              </Typist>
            </div>
          </p>
        </div>
        <div className="user_image animated zoomIn"></div>
        <BasicDetail></BasicDetail>
        <WorkExperience></WorkExperience>
        <SkillSets></SkillSets>
        <Hobbies></Hobbies>
        <Connect></Connect>
      </div>
    );
  }
}

export default App;
