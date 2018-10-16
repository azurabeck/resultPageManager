import React, { Component } from 'react';

// Extenal Library 
import { Row, Col } from 'react-bootstrap'

// Component imports
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import PageManager from './components/PageManager'

// Style Import
import './style/app.css';
import './style/header.css';
import './style/sideMenu.css';
import './style/pageManager.css';
import './style/table.css';


class App extends Component {
  render() {
      return (        
          <Row className='app'>

              <Col md={2}>
                <SideMenu />
              </Col>
              
              <Col md={10}>
                <Row className='content'>    
                    <Header />                
                    <PageManager />
                </Row>
              </Col>
          
          </Row>
      );
  }
}

export default App;
