import React from 'react';
import './styles/App.css';
import styled from "styled-components";

const Header = styled.div`
  background-color: white;
  margin: 0em;
  padding: 1em 0em;
  overflow: auto;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`
const Nav = styled.div`
  float: right;
  clear: none;
  padding: .3em;
`
const Link = styled.a`
  text-decoration: none;
  color: black;
  padding: .3em;
  &:hover {
    color: #901BFF;
  }
`
const Name = styled.span`
  padding-left: 1.5em;
  font-size: 2em;
  float: left;
  clear: none;
`
const Section = styled.div`
  text-align: left;
  background-color: white;
  margin: 5em 2em;
  padding: 2em 3em;
  overflow: auto;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
const SectionTitle = styled.div`
  padding: 1em 0em .5em 0em;
  font-weight: 400;
  font-size: 2em;
`

const SectionSub = styled.div`
 font-weight: 700;
 font-size: 1.5em;
`
const SectionBody = styled.div`
  padding: 1em 3em 1em 0em;
  font-size: 1em;
  width:100%;
  
`
const Tags = styled.div`
  padding: 0em 3em 1em 0em;
`
const ATag = styled.span`
  background-color: #1DD6D9;
  color: white;
  padding: .2em .5em;
  margin: 0em .2em;
  
`
const Footer = styled.div`
  background-color: white;
`

function App() {

  return (
    <div className="App">
      <Header>
        <Name>Karmen Lu</Name>
        <Nav>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#education">Education</Link>
          <Link href="#projects">Projects</Link>
        </Nav>
      </Header>
      <body>
        <Section id="about">
          <SectionTitle>Hello. My name is Karmen.</SectionTitle>
          <SectionBody>
            I am a student and software engineer from Boston, MA.
            <br/><br/>
            I will be entering my fourth year at Northeastern University this Fall. Over these past few years,  
            I have taken advantage of opportunities to collaborate with peers, to ask questions, and to develop my skillset.  
            <br/><br/>I also love riding my bike, learning how to play guitar, listening to new music, and going outside.
          </SectionBody>
        </Section>
        <Section id="experience">
          <SectionTitle>Experience</SectionTitle>
          <SectionSub>
            Curriculum Associates, North Billerica, MA<br/>Software Engineer Co-op
          </SectionSub>
          <SectionBody>
            Curriculum Associates is an education technology company. I was placed onto a team which focused on educator experience. Over the course of six months, I refactored databases with liquibase, documented APIs with Spring REST Docs, logged user interactions with log4j, and developed meaningful connections with mentors and my fellow co-ops. 
          </SectionBody>
          <Tags>
            <ATag>Fall 2019</ATag>
          </Tags>
          <SectionSub>
            Khoury College of Computer Sciences, Boston, MA<br/>CS3500 Teaching Assistant
          </SectionSub>
          <SectionBody>
            CS3500, a course on Object-Oriented Design. My responsibilities include holding office hours and grading exams/assignments. 
          </SectionBody>
          <Tags>
            <ATag>Summer 2019</ATag>
            <ATag>Spring 2020</ATag>
            <ATag>Summer 2020</ATag>
          </Tags>
          <SectionSub>
            mHealth Research Group, Boston, MA<br/>Volunteer
          </SectionSub>
          <SectionBody>
            I contributed to a project that was focused on the development of algorithms for activity detection from wearable sensors. Accelerometer datasets from different research groups were provided in a variety of formats. My task was to process these datasets and output a specific csv format which the mHealth algorithms used. Along the way, I learned about the Python pandas library.
          </SectionBody>
          <Tags>
            <ATag>Summer 2018</ATag>
          </Tags>
        </Section>
        <Section id="education">
          <SectionTitle>Education</SectionTitle>
          <SectionSub>Northeastern University, Boston, MA</SectionSub>
          <SectionBody>Candidate for a BS in Computer Science, Expected to Graduate May 2021</SectionBody>
          <SectionSub>Arlington Catholic High School, Arlington, MA</SectionSub>
          <SectionBody>Class of 2017</SectionBody>
        </Section>
        <Section id="projects">
          <SectionTitle>Projects</SectionTitle>
          <SectionSub>Cheminformatics</SectionSub>
          <SectionBody>
            A tool for medicinal chemists to filter and group chemical compounds. By identifying compounds which are medically promising, this tool eliminates time spent on synthesizing chemical compounds which are not medically viable. Features that I added include a drop-down menu to select molecular fingerprint types and a color-picking tool.
          </SectionBody>
          <Tags>
            <ATag>Python</ATag>
            <ATag>Flask</ATag>
            <ATag>RDKit</ATag>
          </Tags>
          <SectionSub>Behavior Analysis</SectionSub>
          <SectionBody>
            A video game which collects data that is used to assess how certain stimuli affect human avoidance responding. This project was built in collaboration with Dr. Nicole M. Davis, a professor of Northeastern University’s Bouve College of Health Sciences. User interactions affect the timing and duration of four distinct playing states. My contributions to this project include the development of an admin configuration page and a user log-in page. I collaborated with my team at Sandbox and learned about JavaScript libraries like Lodash and styled-components. 
          </SectionBody>
          <Tags>
            <ATag>React</ATag>
            <ATag>Node.js</ATag>
          </Tags>
        </Section>
        <Footer>
          <Link href="https://www.linkedin.com/in/karmen-lu" target="_blank">LinkedIn</Link>
          <Link href="https://github.com/klu17" target="_blank">Github</Link>
          <div>Made by Karmen Lu ♥ 2020</div>
        </Footer> 
        {/* <div className="row">
          <div className="column">
            <img src={require("./photos/charles.jpg")} className="hori" alt="tree by the Charles River"/>
            <img src={require("./photos/shadow.jpg")} className="vert" alt="waving shadow"/>
            <img src={require("./photos/rainsford.jpg")} className="hori" alt="sunrise at Rainsford Island"/>
            <img src={require("./photos/chemFilter.jpg")} className="vert" alt="cheminformatics user interface"/>
          </div>
          <div className="column">
            <img src={require("./photos/chemColorPicker.jpg")} className="hori" alt="color picker tool for cheminformatics"/>
            <img src={require("./photos/chemResults.jpg")} className="vert" alt="results of filtering with cheminformatics"/>
            <img src={require("./photos/baLogIn.png")} className="hori" alt="log in page for behavior analysis"/>
            <img src={require("./photos/baPlaying.png")} className="hori" alt="start state of playing behavior analysis"/>
          </div>
          <div className="column">
              <img src={require("./photos/baHigherScore.png")} className="hori" alt="another game state of behavior analysis"/>
              <img src={require("./photos/bikeGang.jpg")} className="hori" alt="people biking"/>
          </div>
        </div> */}
      </body>

    </div>
  );
}

export default App;
