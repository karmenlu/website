import React, {Component} from "react";

class Misc extends Component {
    render() {
        return (
            <section id="misc">
                <div className="content">
                    <div className="header mx-auto text-center">Misc</div>
                    <div className="projectTile">
                        <div className="bg-transparent row justify-content-center no-gutters">
                            <div className="col-lg-6">
                                <div className="d-flex h-70">
                                    <div className="w-100 my-auto text-center text-lg-left p-2">
                                        <div className="projectTitle">Robotic Arm Knocks Over Plastic Bottles</div>
                                        <p className="projectText">
                                            Controlling the position and speed of a robotic arm with a C++ program
                                            running on a ZedBoard ARM processor.
                                            The goal was to knock over two empty bottles in the middle of the table
                                            using two additional empty bottles.
                                            Completed as midterm project for Embedded Design: Enabling Robotics
                                            (EECE2160, Northeastern University).
                                        </p>
                                        <div className="tagList">
                                            <span className="tag">Zedboard</span>
                                            <span className="tag">Xillinux</span>
                                            <span className="tag">C++</span>
                                            <span className="tag">GNU C++ compiler</span>
                                            <span className="tag">Robotic arm with servo motors (base, bicep, elbow, wrist, gripper)</span>
                                        </div>
                                        <a className="btn link sourceCode"
                                           href="https://www.youtube.com/watch?v=NshRpADAhWw" target="_blank"
                                           alt="link to EECE2160 Midterm Project">
                                            Link to Video
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projectTile">
                        <div className="bg-transparent row justify-content-center no-gutters">
                            <div className="col-lg-6">
                                <div className="d-flex h-70">
                                    <div className="w-100 my-auto text-center text-lg-left p-2">
                                        <div className="projectTitle">Generating Tones and Displaying a Pressed Key</div>
                                        <p className="projectText">
                                            The goal of the project was to interface a 4x4 Matrix Keypad with a Verilog program running on
                                            the ZedBoard to generate tones and display the pressed key on both a 7-segment display and on the LEDs of a
                                            ZedBoard in a binary number representation.
                                            Completed as final project for Embedded Design: Enabling Robotics (EECE2160,
                                            Northeastern University).
                                        </p>
                                        <div className="tagList">
                                            <span className="tag">Zedboard</span>
                                            <span className="tag">Xillinux</span>
                                            <span className="tag">Verilog hardware description language</span>
                                            <span className="tag">Solderless breadboard</span>
                                        </div>
                                        <a className="btn link sourceCode"
                                           href="https://www.youtube.com/watch?v=85ddKPeBI1w" target="_blank"
                                           alt="link to EECE2160 Final Project">
                                            Link to Video
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

export default Misc;
