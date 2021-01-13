import React, {Component} from "react";
import {Route, NavLink, Switch} from "react-router-dom";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Misc from "./components/Misc";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuOpen: false,
            screenWidth: null
        }
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
        this.resizeScreen = this.resizeScreen.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeScreen);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeScreen)
    }

    resizeScreen() {
        if (window.innerWidth > 600) {
            this.setState({isMobileMenuOpen: false});
        }

    }

    toggleMobileMenu() {
        this.setState(prevState => ({isMobileMenuOpen: !prevState.isMobileMenuOpen}));
    }

    closeMobileMenu() {
        this.setState({isMobileMenuOpen: false});
    }

    render() {
        return (
            <React.Fragment>
                <div className="navBar">
                    <div className="navHeader">
                        <div className="navHeaderMenuButton" onClick={this.toggleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div className="navHeaderContent">
                            <NavLink onClick={this.closeMobileMenu} exact to="/" className="navHeaderTitle">Karmen Lu</NavLink>
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
                                       href="https://drive.google.com/file/d/1amBFSxpe4eAg6JRCKIg3k4VI_konknlO/view?usp=sharing"
                                       target="_blank" alt="Link to Karmen's resume">
                                        <img className="connectLogo" src={process.env.PUBLIC_URL + "/images/docsBlack.svg"}
                                             alt="resume logo"/>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <ul className={`${this.state.isMobileMenuOpen ? "navBarItems row" : "hideMe"}`}>
                        {/*<li onClick={this.closeMobileMenu}><NavLink exact to="/">Welcome</NavLink></li>*/}
                        <li onClick={this.closeMobileMenu}><NavLink exact to="/projects">Projects</NavLink></li>
                        <li onClick={this.closeMobileMenu}><NavLink exact to="/about">About</NavLink></li>
                        <li onClick={this.closeMobileMenu}><NavLink exact to="/experience">Experience</NavLink></li>
                        <li onClick={this.closeMobileMenu}><NavLink exact to="/misc">Misc</NavLink></li>
                    </ul>
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
                    <Route exact path={"/misc"}>
                        <Misc/>
                    </Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;

