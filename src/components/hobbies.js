import React, { Component } from 'react';
import '../styles/hobbies.css';

class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies_wrapper">
        <div className="hobbies_header"><span>HOBBIES</span></div>
        <div className="hobbies_body">
          <div className="travel">
            <div className="subheader">TRAVELLING</div>
            <div className="desc">Travelling around in nature and enjoying peace and serenity</div>
          </div>
          <div className="guitar">
            <div className="subheader">MUSIC</div>
            <div className="desc">I love playing guitar and listening to music</div>
          </div>
          <div className="acting">
            <div className="subheader">ACTING</div>
            <div className="desc">Acting is my passion and i enjoy it always</div>
          </div>
          <div className="comp_game">
            <div className="subheader">GAMES</div>
            <div className="desc">Passion for computer gaming anyday and anytime</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
