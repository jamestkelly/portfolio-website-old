import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'firebase/database';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    // Method to handle changes in submission fields
    handleChange = (event) => {
        console.log(event);

        const target = event.target;
        const value = target.type === 'checkBox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event);

        this.setState({
            disabled: true
        });

        this.sendEmail();
        this.state.name = "";
        this.state.email = "";
        this.state.message = "";
    }

    sendEmail = () => {
        Axios.post(
            'https://us-central1-portfolio-website-76885.cloudfunctions.net/submit',
            this.state
          )
            .then(res => {
                console.log(res);
                this.setState({
                    disabled: false,
                    emailSent: true
                });
                db.collection('emails').add({
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message,
                    time: new Date(),
                })
            })
            .catch(error => {
              console.log(error)
              this.setState({
                disabled: false,
                emailSent: false
            });
        })
    }

    render() {
        return(
            <div>
                <Container fluid = { true }>
                    <Row className = "justify-content-center">
                        <Col md = {6}>
                            <h1 className = "py-4 mb-5 display-3 font-weight-bolder">
                                Let's Get in Touch!
                            </h1>
                        </Col>
                    </Row>
                    <Row className = "justify-content-center">
                        <Col md = {6}>
                            <Form onSubmit = { this.handleSubmit }>
                                <Form.Group>
                                    <Form.Label htmlFor = "full-name">Full Name</Form.Label>
                                    <Form.Control id = "full-name" name = "name" type = "text" value = { this.state.name }
                                        onChange = { this.handleChange }
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label htmlFor = "email">Email</Form.Label>
                                    <Form.Control id = "email" name = "email" type = "email" value = { this.state.email }
                                        onChange = { this.handleChange }
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label htmlFor = "message">Message</Form.Label>
                                    <Form.Control id = "message" name = "message" as = "textarea" rows = "3"
                                        value = { this.state.message } onChange = { this.handleChange }
                                    />
                                </Form.Group>

                                <Button className = "mb-2 d-inline-block" variant = "primary" type = "submit"
                                    disabled = { this.state.disabled }
                                    style = {{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        fontSize: '20px',
                                        padding: '5px 50px',
                                        borderRadius: '5px',
                                        outline: 'none',
                                        outlineColor: 'black',
                                        outlineOffset: 'none',
                                        margin: '10px 0px',
                                        cursor: 'pointer'
                                    }}>
                                    Send
                                </Button>

                                { this.state.emailSent === true && <p className = "d-inline success-msg">Email Sent!</p> }
                                { this.state.emailSent === false && <p className = "d-inline err-msg">Email failed to send.</p> }
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContactPage;