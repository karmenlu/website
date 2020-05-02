import React from 'react';
import './styles/App.css';
import styled from "styled-components";

const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
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
  margin: 5em 3em;
  padding: 0em 3em;
  //box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
const SectionTitle = styled.div`
  padding: 1em 0em .5em 0em;
  font-weight: 400;
  font-size: 1.7em;
`
const SectionSub = styled.div`
 font-weight: 700;
 font-size: 1em;
`
const SectionBody = styled.div`
  padding: 1em 3em 1em 0em;
  font-size: 1em;
  
`
const Tags = styled.div`
  padding: 0em 3em 1em 0em;
`
const ATag = styled.span`
  background-color: dodgerblue;
  color: white;
  padding: .2em .5em;
  margin: 0em .2em;
  
`
const Footer = styled.div`
  
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
          <SectionTitle>About</SectionTitle>
          <SectionBody>
            I am a student and software engineer from Massachusetts. I am on the search for Fall 2020 opportunities.
            <br/><br/>I love riding my bike, learning how to play guitar, listening to new music, and going outside.
          </SectionBody>
          <img src={require("./profile.JPG")}/>
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
          <SectionBody>Candidate for a BS in Computer Science, exp. May 2021</SectionBody>
          <SectionSub>Arlington Catholic High School, Arlington, MA</SectionSub>
          <SectionBody>Class of 2017</SectionBody>
        </Section>
        <Section id="projects">
          <SectionTitle>Projects</SectionTitle>
          <SectionSub>Cheminformatics</SectionSub>
          <SectionBody>
            A tool for medicinal chemists to filter and group chemical compounds. By identifying compounds which are medically promising, this tool eliminates time spent on synthesizing chemical compounds which are not medically viable. Features that I added include a drop-down menu to select molecular fingerprint types and a color-picking tool. 
Python, Flask, RDKit
          </SectionBody>
          <Tags>
            <ATag>Python</ATag>
            <ATag>Flask</ATag>
            <ATag>RDKit</ATag>
          </Tags>
          <SectionSub>Behavioral Analysis</SectionSub>
          <SectionBody>
            A video game which collects data that is used to assess how certain stimuli affect human avoidance responding. This project was built in collaboration with Dr. Nicole M. Davis, a professor of Northeastern University’s Bouve College of Health Sciences. User interactions affect the timing and duration of four distinct playing states. My contributions to this project include the development of an admin configuration page and a user log-in page. I collaborated with my team at Sandbox and learned about JavaScript libraries like Lodash and styled-components. 
          </SectionBody>
          <Tags>
            <ATag>React</ATag>
            <ATag>Node.js</ATag>
          </Tags>
        </Section>
        
        <Footer>
          <Link href="https://www.linkedin.com/in/karmen-lu">LinkedIn</Link>
          <Link href="https://github.com/klu17">Github</Link>
          <div>Made by Karmen Lu, 2020</div>
        </Footer> 
 
      </body>
    </div>
  );
}

export default App;
