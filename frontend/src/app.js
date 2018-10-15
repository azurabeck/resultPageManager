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


class App extends Component {
  render() {
      return (        
          <div>
          
              <Header />
              <Row className='content'>
                  <SideMenu />
                  <PageManager />
              </Row>
            
          </div>
      );
  }
}

export default App;
