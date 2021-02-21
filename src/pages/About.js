// Import React Components
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props) {
    return(
        <div>
            <Container fluid = { true }>
                <Row className = "justify-content-center">
                    <Col md = {6}>
                        <h1 className = "py-4 display-2 font-weight-bolder">
                            About Me
                        </h1>
                    </Col>
                </Row>
                <Row className = "justify-content-center">
                    <Col md = {6}>
                        <p>
                            Hello! My name is Jim Tran Kelly. I'm currently a full-time student in my final year of my undergraduate
                            degree in a Bachelor's of Information Technology (Computer Science) at the Queensland University of Technology
                            (QUT). I've also gained experience working as an undergraduate software engineer, developing progressive web
                            applications (PWA) using Angular & TypeScript.
                        </p>
                        <p>
                            That's not all though! I've also worked on developing my skills in my my personal time by working on projects, including
                            my personal portfolio website with ReactJS, and <a href = "https://github.com/jamestkelly/is-my-coffee-cold">'is-my-coffee-cold'</a>,{' '}
                            a PWA written using Ionic Capacitor & TypeScript implementing CRUD through Firebase and applying the modified Euler
                            method to Newton's rate of cooling to calculate how long until your coffee goes cold.
                        </p>
                        <p>
                            My personal development as an aspiring full stack developer has also led me to gain
                            experience in a variety of other programming concepts and languages. You can see those{' '}
                            <a href = "https://github.com/jamestkelly/resume/blob/main/main.pdf">here</a>, alongside the projects I'm working on in my resume!
                            There's more I've worked on but those are private, just send me an email if you'd like to see them.
                        </p>
                        <p>
                            Another place to check out what I'm doing is my{' '}
                            <a href = "https://github.com/jamestkelly/">GitHub</a>, I'm always eager to try out a new skill or develop new projects.
                            If you wish to contact me via email or organise some other method of communication, feel free to send me an email via the
                            'Contact' page!
                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default AboutPage;