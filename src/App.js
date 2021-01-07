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

