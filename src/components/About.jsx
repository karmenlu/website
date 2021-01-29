import React, {Component} from "react";

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="header mx-auto text-center">About</div>
                <div className="content row align-self-center">
                    <div className="sectionBodyText">
                        I am self-motivated and resilient. As an undergraduate student, I have leveraged opportunities
                        to collaborate with peers, to ask questions, and to learn from everyone around me. Although
                        I entered college as a first generation student with no prior programming experience, I have grown
                        as an engineer through coursework, involvement in student organizations, and technical
                        work experiences. Working frontend, backend, and infrastructure roles, I learned about 
                        the software industry and about what it's like to work in large codebases. 
                        And now, I continue to learn. Committed to personal progress and curious about new technologies,
                        I know that my journey is just beginning.
                        <br/><br/>
                        With graduation around the corner (May 2021), I am seeking post-grad opportunities. While most
                        of my past
                        roles have centered around web development, I am an enthusiastic learner and would be open to
                        any opportunities in
                        software engineering/development. In particular, I am interested in health and wellness
                        technology.
                        <br/><br/>
                        Outside of work and school, my other interests include road cycling, running, inline skating,
                        music, and art.
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
