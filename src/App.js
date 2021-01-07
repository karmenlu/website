import React, {Component} from "react";
import {Route, NavLink, Switch} from "react-router-dom";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="navBar row">
                    <li><NavLink exact to="/">Welcome</NavLink></li>
                    <li><NavLink exact to="/projects">Projects</NavLink></li>
                    <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/experience">Experience</NavLink></li>
                </ul>
                <div className="connectRow">
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
                <Switch>
                    <Route exact path={"/"} activeClassName={"activeMenuItem"}>
                        <Welcome/>
                    </Route>
                    <Route exact path={"/projects"}>
                        <Projects/>
                    </Route>
                    <Route exact path={"/about"}>
                        <About/>
                    </Route>
                    <Route exact path={"/experience"}>
                        <Experience/>
                    </Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;

