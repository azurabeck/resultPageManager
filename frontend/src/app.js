import React, { Component } from 'react';

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
          <div className='app'>

              <SideMenu />
              
              <div className='right-panel'>
                    <Header />                
                    <PageManager />
              </div>
          
          </div>
      );
  }
}

export default App;
