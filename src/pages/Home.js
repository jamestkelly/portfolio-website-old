// Import React Components
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typical from 'react-typical';
import Button from 'react-bootstrap/Button';

// Import video files
import ProgrammingMp4 from '../assets/programming.mp4';
import ProgrammingWebm from '../assets/programming.webm';

// Import application css classes
import '../App.css';

function HomePage(props) {
    return(
        <Container fluid = { true }>
                <Row style = {{
                    height: "100%"
                }}>
                    <Col className = "landing-left-column" xs = {{ span: 12, order: 1 }} sm = {{ span: 12, order: 1 }}
                    md = {{ span: 6, order: 1 }}>
                        <h1 className = "px-md-3 font-weight-bold" style = {{
                            marginTop: 50
                        }}>
                            Hello there!
                        </h1>

                        <hr className = "pl-1 align-items-start" style = {{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 5,
                            marginLeft: 20,
                            width: 30,
                        }}/>

                        <h3 className = "pl-4">
                            My name is Jim, welcome to my portfolio website! I believe in creating
                            friendly, helpful, and easy-to-use programs.
                        </h3>

                        <h5 className = "py-md-5 px-md-4">
                            I'm an{' '}
                                <Typical
                                    loop = { Infinity }
                                    wrapper = "b"
                                    steps = {[
                                        'undergraduate software engineer',
                                        1000,
                                        'aspiring full stack developer',
                                        1000,
                                        'eager learner',
                                        1000,
                                        'academically motivated full-time student at QUT',
                                        500
                                    ]}
                                    >
                                </Typical>
                        </h5>

                        <h5 className = "px-4">
                            I like to build websites, create progressive web apps (PWA), develop my skills in software development,
                            web & application design, and cooking, and occasionally write! I've gained experience ranging from embedded systems within my
                            engineering minor, to developing my own PWA 'is-my-coffee-cold', an application to tell you how long until
                            your coffee goes cold given your location's temperature.
                        </h5>

                        <h3 className = "pt-5 pb-2 px-5">
                            Want to see my resume?
                        </h3>
                        <a href = "https://github.com/jamestkelly/resume/blob/main/main.pdf">
                            <Button className = "pt-1 pb-2 ml-5" style = {{
                                backgroundColor: 'black',
                                color: 'white',
                                fontSize: '20px',
                                padding: '10px 60px',
                                borderRadius: '5px',
                                outline: 'none',
                                outlineColor: 'black',
                                outlineOffset: 'none',
                                margin: '10px 0px',
                                cursor: 'pointer'
                            }}>
                                Take me there!
                            </Button>
                        </a>
                        <p className = "pt-4 pb-2 px-3 font-weight-bold">
                            To find out more about me, navigate to the About page. Or if you'd like to get in touch,
                            send me an email from the Contact page.
                        </p>
                    </Col>
                    <Col xs = {{ span: 12, order: 2 }} sm = {{ span: 12, order: 2 }} md = {{ span: 6, order: 2 }}>
                        <video autoPlay muted loop
                            style = {{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                left: "50%",
                                top: "50%",
                                objectFit: "fill",
                                transform: "translate(-50%, -50%)",
                                zIndex: "-1",
                            }}>
                            <source src = { ProgrammingMp4 } type = "video/mp4"/>
                            <source src = { ProgrammingWebm } type = "video/webm"/>
                        </video>
                    </Col>
                </Row>
            </Container>
    );
}



export default HomePage;