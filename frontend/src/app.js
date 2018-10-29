import React, { Component } from 'react';

// Component imports
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Content from './components/Content'
import * as NewsAPI from './utils/utils'

// Style Import
import './style/app.css';
import './style/header.css';
import './style/sideMenu.css';
import './style/pageManager.css';
import './style/table.css';
import './style/buttonAdd.css';
import './style/button.css';
import './style/newCard.css'
import './style/buttonRadio.css'
import './style/checkBox.css'


class App extends Component {

    state = {
        ResultPage: []
      }

    componentDidMount() {
        this.fetch_news_details()
      }
    
      fetch_news_details = () => {
        NewsAPI.getAllPosts().then((page) => {
          this.setState({ResultPage: page})
        })
      }


    render() {

        console.log(this.state.ResultPage)

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
