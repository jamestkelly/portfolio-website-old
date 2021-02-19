import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithubSquare, FaLinkedin, FaMedium } from 'react-icons/fa';

function Footer() {
    return(
        <footer className = "p-0">
            <Container fluid = { true }>
                <Row className = "border-top justify-content-between p-3">
                    <Col className = "p-0" md = {3} sm = {12}>
                        Portfolio website by Jim Kelly | Made with React
                    </Col>
                    <Col className = "px-2 d-flex justify-content-center" md = {3} sm = {12}>
                        <a href = "https://github.com/jamestkelly/">
                            <FaGithubSquare style = {{ color: 'black', marginRight: 5}} size = {20}
                            onMouseOver = {({ target }) => target.style.color = 'yellow'}
                            onMouseOut= {({ target }) => target.style.color = 'black'}/>
                        </a>
                        <a href = "https://www.linkedin.com/in/jim-kelly-381b3a190/">
                            <FaLinkedin style = {{ color: 'black', marginRight: 5}} size = {20}
                            onMouseOver = {({ target }) => target.style.color = 'yellow'}
                            onMouseOut= {({ target }) => target.style.color = 'black'}/>
                        </a>
                        <a href = "https://jimkelly-t.medium.com">
                            <FaMedium style = {{ color: 'black' }} size = {20}
                            onMouseOver = {({ target }) => target.style.color = 'yellow'}
                            onMouseOut= {({ target }) => target.style.color = 'black'}/>
                        </a>
                    </Col>
                    <Col className = "p-2 d-flex justify-content-end" md = {3} sm = {12}>
                        <Row>
                        MIT License Copyright &#169; [2021]
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;