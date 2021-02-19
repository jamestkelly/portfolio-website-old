import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Hero(props) {

    return(
        <Container>
            <Row className = "justify-content-center">
                { props.title && <h2 className = "display-1 font-weight-bolder">{ props.title }</h2> }
            </Row>
            <Row className = "justify-content-center">
                { props.subtitle && <h4 className = "display-4 font-weight-light">{ props.subtitle }</h4> }
            </Row>
            <Row className = "justify-content-center">
            { props.text && <h5 className = "lead font-weight-light">{ props.text }</h5> }
            </Row>
        </Container>
    );
}

export default Hero