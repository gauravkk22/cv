import React, { Component } from 'react';
import '../styles/connect.css';
import { Link} from 'react-router'

class Connect extends Component {
  render() {
    return (
      <div className="connect_wrapper">
        <div className="connect_header"><span>CONNECT</span></div>
        <div className="connect_body">
            <a className="facebook" href="http://www.facebook.com " target="_blank"></a>
            <a className="linkedin" href="http://www.linkedin.com" target="_blank"></a>
            <a className="github" href="http://www.github.com" target="_blank"></a>
            <div className="gmaill" href="#">gauravkk22@gmail.com</div>
            <div className="phone"></div>
            <div className="Address"></div>
        </div>
      </div>
    );
  }
}

export default Connect;
