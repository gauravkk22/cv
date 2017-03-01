import React, { Component } from 'react';
import '../styles/basic_details.css';

class BasicDetail extends Component {
  render() {
    return (
      <div className="basic_detail_block_wrapper animated fadeInLeft">
        <div className="educational_details_header"><span>EDUCATIONAL DETAIL</span></div>
        <table className="educational_table">
          <tr className="graduation_block">
              <td></td>
              <td>IIIT ALLAHABAD</td>
              <td>B. TECH.(I.T.)</td>
              <td>7.8 CGPA</td>
              <td>2012-2016</td>
          </tr>
          <tr className="higher_secondary_block">
              <td></td>
              <td>ST. M. HIGH SCHOOL</td>
              <td>C. B. S. E.</td>
              <td>83%</td>
              <td>2010-2012</td>
          </tr>
          <tr className="secondary_block ">
              <td></td>
              <td>B. D. PUBLIC SCHOOL</td>
              <td>C. B. S. E.</td>
              <td>10 CGPA</td>
              <td>2010</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default BasicDetail;
