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
                        <div className="connectRow text-center">
                            <div className="connectLogoWrapper">
                                <a className="link" href="https://www.linkedin.com/in/karmen-lu" target="_blank"
                                   alt="Connect with Karmen on LinkedIn">
                                    <img className="connectLogo" src={process.env.PUBLIC_URL + "/images/liBlack.png"}
                                         alt="black LinkedIn logo"/>
                                </a>
                            </div>
                            <div className="connectLogoWrapper">
                                <a className="link" href="https://github.com/klu17" target="_blank" alt="Karmen's Github">
                                    <img className="connectLogo" src={process.env.PUBLIC_URL + "/images/githubDark64.png"}
                                         alt="black Github Mark logo"/>
                                </a>
                            </div>
                            <div className="connectLogoWrapper">
                                <a className="link"
                                   href="https://drive.google.com/file/d/1jT0dtqSB2a3iF4WAR6ZIEJoIUvAmwsYA/view?usp=sharing"
                                   target="_blank" alt="Link to Karmen's resume">
                                    <img className="connectLogo" src={process.env.PUBLIC_URL + "/images/docsBlack.svg"}
                                         alt="resume logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
 
export default AboutUs;
