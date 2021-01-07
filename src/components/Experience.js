import React, {Component} from "react";

class Resources extends Component {
    render() {
        return (
            <section id="experience">
                <div className="header mx-auto text-center">Experience</div>
                <div className="content row align-self-center">
                    <div className="sectionBodyText">
                        <div className="sectionSub">
                            Software Engineer Co-op - Lose It!, Boston, MA
                        </div>
                        <div className="sectionBody">
                            Spearhead/initiate development of a React single-page application that has been deployed to production.
                            Continuously adapt application to meet iterative UI design changes. Write Java features to 
                            ensure food quality. Test features with JUnit and Mockito-Kotlin library. Build and run features on iOS 
                            and Android simulators. Update JavaServer Pages for seasonal marketing. Add variables to Amplitude web experiments. 
                            Monitor user analytics. Fix bugs.
                        </div>
                        <div className="tagList">
                            <span className="tag">Fall 2020</span>
                        </div>
                        <div className="sectionSub">
                            Software Engineer Intern - Red Hat, Boston, MA
                        </div>
                        <div className="sectionBody">
                            Contributed to the Mass Open Cloud Metering Project. Designed a system to generate reports,
                            defined
                            use
                            cases and API requirements,
                            developed a functional first iteration of a resource usage reporting UI, and improved the
                            overall responsiveness of the metering interface. (React, Javascript, Jest Snapshot Testing,
                            Figma,
                            PatternFly)
                        </div>
                        <div className="tagList">
                            <span className="tag">Summer 2020</span>
                        </div>
                        <div className="sectionSub">
                            Software Engineer Co-op - Curriculum Associates, North Billerica, MA
                        </div>
                        <div className="sectionBody">
                            Curriculum Associates is an education technology company. I was placed onto a team which
                            focused on
                            educator
                            experience. Over the course of six months, I refactored databases with liquibase, documented
                            APIs
                            with
                            Spring REST Docs, logged user interactions with log4j, and developed meaningful connections
                            with
                            mentors and
                            my fellow co-ops.
                        </div>
                        <div className="tagList">
                            <span className="tag">Fall 2019</span>
                        </div>
                        <div className="sectionSub">
                            Teaching Assistant - Khoury College of Computer Sciences, Boston, MA
                        </div>
                        <div className="sectionBody">
                            Teaching assistant for CS3500, a course on Object-Oriented Design. My responsibilities
                            include
                            holding
                            office hours, grading
                            exams/assignments, and interacting with students on the Piazza course forum.
                        </div>
                        <div className="tagList">
                            <span className="tag">Summer 2019</span>
                            <span className="tag">Spring 2020</span>
                            <span className="tag">Summer 2020</span>
                        </div>
                        <div className="sectionSub">
                            Volunteer - mHealth Research Group, Boston, MA
                        </div>
                        <div className="sectionBody">
                            I contributed to a project that was focused on the development of algorithms for activity
                            detection
                            from
                            wearable sensors. Accelerometer datasets from different research groups were provided in a
                            variety
                            of
                            formats. My task was to process these datasets and output a specific csv format which the
                            mHealth
                            algorithms
                            used. Along the way, I learned about the Python pandas library.
                        </div>
                        <div className="tagList">
                            <span className="tag">Summer 2018</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resources;
