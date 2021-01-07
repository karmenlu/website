import React, { Component } from "react";
 
class Projects extends Component {
  render() {
    return (
        <section id="projects">
            <div className="content">
                <div className="header mx-auto text-center">Projects</div>
                <div className="projectTile">
                    <div className="bg-transparent row justify-content-center no-gutters">
                        <div className="col-lg-6 bg-transparent">
                            <img className="img-fluid" src="../images/SIAD.png" alt="So It's A Date Figma Wireframe"/>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex h-70">
                                <div className="w-100 my-auto text-center text-lg-left p-2">
                                    <div className="projectTitle">So It's A Date</div>
                                    <p className="projectText">
                                        <em>A dating app connects you to that special someone. So It’s A Date connects
                                            you to date ideas that may work for you.</em><br/><br/>
                                        So It’s A Date is a web application that allows users to filter, browse, and
                                        query a
                                        database of social activity/date ideas.
                                    </p>
                                    <div className="tagList">
                                        <span className="tag">React</span>
                                        <span className="tag">Express.js</span>
                                        <span className="tag">Material UI</span>
                                        <span className="tag">PostgreSQL</span>
                                        <span className="tag">Heroku</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectTile">
                    <div className="bg-transparent row justify-content-center no-gutters">
                        <div className="col-lg-6 bg-transparent">
                            <img className="img-fluid" src="../images/ol_desktop_chromium.png" alt="orange lines desktop display"/>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex h-70">
                                <div className="w-100 my-auto text-center text-lg-left p-2">
                                    <div className="projectTitle">Orange Lines</div>
                                    <p className="projectText">
                                        A tool to map routes for activities like walking, cycling, and driving. Inspired
                                        by the
                                        orange lines
                                        in Strava, a social network platform for athletes.
                                    </p>
                                    <div className="tagList">
                                        <span className="tag">React</span>
                                        <span className="tag">Mapbox API</span>
                                        <span className="tag">styled-components</span>
                                    </div>
                                    <a className="btn link" href="https://github.com/klu17/orange-lines" target="_blank"
                                       alt="link to orange lines code">
                                        Source code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectTile">
                    <div className="bg-transparent row justify-content-center no-gutters">
                        <div className="col-lg-6 bg-transparent">
                            <img className="img-fluid" src="../images/behaviorGamePlaying.png" alt="playing behavior analysis game"/>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex h-70">
                                <div className="w-100 my-auto text-center text-lg-left p-2">
                                    <div className="projectTitle">Behavior Analysis</div>
                                    <p className="projectText">
                                        A video game which collects data that is used to assess how certain stimuli
                                        affect human
                                        avoidance
                                        responding. User interactions affect the timing and duration of four
                                        distinct playing states. My contributions to this project include the
                                        development of an
                                        admin configuration
                                        page and a user log-in page. I collaborated with my team at Sandbox and learned
                                        about
                                        JavaScript libraries
                                        like Lodash and styled-components.
                                    </p>
                                    <div className="tagList">
                                        <span className="tag">React</span>
                                        <span className="tag">Node.js</span>
                                    </div>
                                    <a href="https://github.com/sandboxnu/behavioral-analysis" target="_blank"
                                       className="btn link">Source
                                        code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectTile">
                    <div className="bg-transparent row justify-content-center no-gutters">
                        <div className="col-lg-6 bg-transparent">
                            <img className="img-fluid" src="../images/chemOutput.png" alt="cheminformatics analysis output"/>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex h-70">
                                <div className="w-100 my-auto text-center text-lg-left p-2">
                                    <div className="projectTitle">Cheminformatics</div>
                                    <p className="projectText">
                                        A tool for medicinal chemists to filter and group chemical compounds. By
                                        identifying
                                        compounds which are
                                        medically promising, this tool eliminates time spent on synthesizing chemical
                                        compounds
                                        which are not
                                        medically viable. Features that I added include a drop-down menu to select
                                        molecular
                                        fingerprint types and a
                                        color-picking tool.
                                    </p>
                                    <div className="tagList">
                                        <span className="tag">Python</span>
                                        <span className="tag">Flask</span>
                                        <span className="tag">RDKit</span>
                                    </div>
                                    <a className="btn link" href="https://github.com/sandboxnu/cheminformatics" target="_blank" alt="link to cheminformatics code">
                                        Source code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
 
export default Projects;
