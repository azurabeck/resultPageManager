import React, { Component } from 'react';

// Component imports
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Content from './components/Content'

// Style Import
import './style/app.css';
import './style/header.css';
import './style/sideMenu.css';
import './style/pageManager.css';
import './style/table.css';
import './style/buttonAdd.css';
import './style/button.css';
import './style/newCard.css'


class App extends Component {
  render() {
      return (        
          <div className='app'>

              <SideMenu />
              
              <div className='right-panel'>
                    <Header />                
                    <Content />
              </div>
          
          </div>
      );
  }
}

export default App;
