import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Component imports
import PageManager from './PageManager'
import CardCreator from './CardCreator'

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
        </Switch>
      </div>
    ) 
  }
};


export default Content;