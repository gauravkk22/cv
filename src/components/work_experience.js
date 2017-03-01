import React, { Component } from 'react';
import '../styles/work_experience.css';

class WorkExperience extends Component {
  constructor(props){
    super(props);
    this.state = {
      work_flag : 0
    };

    this.handleCompanyClick1 = this.handleCompanyClick1.bind(this);
    this.handleCompanyClick2 = this.handleCompanyClick2.bind(this);
    this.handleCompanyClick3 = this.handleCompanyClick3.bind(this);
    this.handleCompanyClick0 = this.handleCompanyClick0.bind(this);
  }

  handleCompanyClick1(){
      // console.log('reached handleCompanyClick',flag);
      this.setState({work_flag : 1});
    }
  handleCompanyClick2(){
      // console.log('reached handleCompanyClick',flag);
      this.setState({work_flag : 2});
    }
  handleCompanyClick3(){
      // console.log('reached handleCompanyClick',flag);
      this.setState({work_flag : 3});
    }
  handleCompanyClick0(){
      // console.log('reached handleCompanyClick',flag);
      this.setState({work_flag : 0});
    }


  render() {
    console.log('work_flag',this.state.work_flag);

    // function handleCompanyClick(flag){
    //   console.log('reached handleCompanyClick',flag);
    //   this.setState({work_flag : flag});
    // }

    return (
      <div className="work_experience_wrapper">
        <div className="work_experience_header"><span>WORK EXPERIENCE</span></div>
          {
          this.state.work_flag === 0 &&
            <div className="work_list">
              <div className="company1" onClick={this.handleCompanyClick1} ></div>
              <div className="company2" onClick={this.handleCompanyClick2}></div>
              <div className="company3"onClick={this.handleCompanyClick3}></div>
            </div>
          }
          {
            this.state.work_flag === 1 &&
              <div className="individual_work_wrapper">
                <div className="work_description1">
                  <span className=" delay1 animated fadeInLeft text">Joined in as Frontend Developer </span>
                  <span className=" delay2 animated fadeInLeft text">Worked on development of webapp&apos;s insights amd monitor part relating to call center</span>
                  <span className=" delay3 animated fadeInLeft text">The webapp is used to monitor different groups and get call details and records and few other tools</span>
                </div>
                <div className="company1 individual animated zoomInUp" onClick={this.handleCompanyClick0}><span className="work_duration1">Oct 2016 - Feb 2016</span></div>
                <div className="work_description2">
                  <span className="delay4 animated fadeInRight  tech_header_text">Technologies Used</span>
                  <span className="delay5 animated fadeInRight"><span className="reactjs_icon"></span> <span className="redux_icon"></span> </span>
                  <span className="delay6 animated fadeInRight"> <span className="html_icon"></span> <span className="css_icon"></span> </span>
                </div>
              </div>
          }
          {
            this.state.work_flag === 2 &&
              <div className="individual_work_wrapper">
                <div className="work_description1">
                  <span className=" delay1 animated fadeInLeft text">Joined in as Frontend Developer </span>
                  <span className="delay2 animated fadeInLeft text">Worked on development of SPA for create professionals, artists, illustrators and graphic designers</span>
                  <span className="delay3 animated fadeInLeft text">The SPA had the functionality to upload and share artworks and help  to create their artistic portfolio</span>
                </div>
                <div className="company2 individual animated zoomInUp" onClick={this.handleCompanyClick0}><span className="work_duration2">Jan 2016 - May 2016</span></div>
                <div className="work_description2">
                  <span className="delay4 animated fadeInRight tech_header_text">Technologies Used</span>
                  <span className="delay5 animated fadeInRight text"><span className="angularjs_icon"></span> <span className="html_icon"></span></span>
                  <span className="delay6 animated fadeInRight text"><span className="css_icon"></span></span>

                </div>
              </div>
          }
          {
            this.state.work_flag === 3 &&
              <div className="individual_work_wrapper">
                <div className="work_description1">
                  <span className="delay1 animated fadeInLeft text">Joined in as Web Developer Intern</span>
                  <span className="delay2 animated fadeInLeft text">Worked on development of Internal CRM</span>
                  <span className="delay3 animated fadeInLeft text">Internal CRM was made to help vendors whose venue were on the website by managing and tracking the order on the app</span>
                </div>
                <div className="company3 individual animated zoomInUp" onClick={this.handleCompanyClick0}><span className="work_duration3">June 2016 - Sept 2016</span></div>
                <div className="work_description2">
                  <span className="delay4 animated fadeInRight tech_header_text">Technologies Used</span>
                  <span className="delay5 animated fadeInRight text"><span className="php_icon"></span> <span className="ci_icon"></span></span>
                  <span className="delay6 animated fadeInRight text"><span className="html_icon"></span> <span className="css_icon"></span></span>
                </div>
              </div>
          }
      </div>
    );
  }
}

export default WorkExperience;
