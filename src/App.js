// Import React components
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Import pages & components
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Footer from './components/Footer';

// Import application css classes
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Jim Kelly',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Jim Kelly',
        subtitle: 'Computer science student, undergraduate software engineer, and aspiring full-stack developer.',
        text: 'Welcome to my portfolio!'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Get in Touch!'
      },
    }
  }
  render() {
    return (
      <Router>
        <Container className = "p-0" fluid = { true }>

          <Navbar className = "border-bottom" bg = "transparent" expand = "lg">
            <Navbar.Brand>Jim Kelly</Navbar.Brand>

            <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle" />
            <Navbar.Collapse id = "navbar-toggle">
              <Nav className = "ml-auto">
                <Link className = "nav-link" to = "/">Home</Link>
                <Link className = "nav-link" to = "/about">About</Link>
                <Link className = "nav-link" to = "/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path = "/" exact render = {() => <HomePage title = { this.state.home.title } subtitle = { this.state.home.subtitle }
            text = { this.state.home.text }/>}/>
          <Route path = "/about" exact render = {() => <AboutPage title = { this.state.about.title }/>}/>
          <Route path = "/contact" exact render = {() => <ContactPage title = { this.state.contact.title }/>}/>

          <Footer/>

        </Container>
      </Router>
    );
  }
}

export default App;
