import React, { Component } from "react";
 
class AboutUs extends Component {
  render() {
    return (
        <section id="welcome" className="fullscreen">
            <div className="row justify-content-center no-gutters align-items-center">
                <div className="col-lg-6 text-center headshotWrap">
                    <img className="rounded-circle headshot mx-auto my-auto" src={process.env.PUBLIC_URL + '/images/headshot.png'} alt="Karmen's headshot"/>
                </div>
                <div className="col-lg-6 text-center text">
                    <div className="mx-auto">
                        <div className="header">Karmen Lu</div>
                        <div className="subtext">
                            Student & Software Engineer<br/>
                            Candidate for a B.S. in Computer Science<br/>
                            Northeastern University Class of 2021
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
 
export default AboutUs;
