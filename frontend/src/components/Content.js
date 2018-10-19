import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Component imports
import PageManager from './PageManager'
import CardCreator from './CardCreator'
import NewCard  from './NewCard'


class Content extends Component {
 
    
  render() {

    return (
      <div className='content'>
        <Switch>
          <Route exact 
            path='/' 
            render={() => (
              <PageManager />
            )}
          />
          <Route exact
            path='/cardCreator'
            component={CardCreator}
          />
          <Route exact path="/newCard/:id" component={NewCard}/>          
        </Switch>
      </div>
    ) 
  }
};


export default Content;