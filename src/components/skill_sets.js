import React, { Component } from 'react';
import '../styles/skill_sets.css';

class SkillSets extends Component {
  render() {
    return (
      <div className="skill_sets_wrapper">
        <div className="skill_sets_header"><span>SKILL SET</span></div>
          <div className="skill_sets_body">
            <table className="technologies">
              <tr className="header_block">
                <td className="left_sub_header bar">TECHNOLOGIES</td>
                <td className="right_sub_header">MORE</td>
              </tr>
              <tr className="html_block">
                <td className="html_bar bar"><div className="skill_bar_html"></div></td>
                <td className="html_more more ">CANVAS</td>
              </tr>
              <tr className="css_block">
                <td className="css_bar bar"><div className="skill_bar_css"></div></td>
                <td className="css_more more">SCSS, LESS</td>
              </tr>
              <tr className="js_block">
                <td className="js_bar bar"><div className="skill_bar_js"></div></td>
                <td className="js_more more">JQUERY,ANGULAR JS, REACT JS</td>
              </tr>
              <tr className="php_block">
                <td className="php_bar bar"><div className="skill_bar_php"></div></td>
                <td className="php_more more">CODEIGNITER</td>
              </tr>
            </table>
        </div>
      </div>
    );
  }
}

export default SkillSets;
