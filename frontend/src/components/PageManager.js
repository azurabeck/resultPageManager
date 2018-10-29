import React, { Component } from 'react'

// Extenal Library 
import { Row } from 'react-bootstrap'

// Components Imports
import CfgArea from '../areaBlock/CfgArea'
import Table from '../elements/TableResultPage'

// Styles Import
import '../style/cfgArea.css'

class PageManager extends Component {


    state = {
        staticDate: [{ 
            country: 'usa',
            lastUpdate: 1292595600,
            name: 'static data test',
            status: 'published',            
        }]
      }
    

    render() {
        return(
            <div className='pageManager'>
                    
                    <label className='pageTitle'>PageManager 
                        <span className='pageSubtitle'> this is the result page of your app</span>
                    </label> 

                    <Row className='whiteBox'>
                    
                        <ul>
                            <li>Portuguese </li>
                            <li>English </li>
                            <li>Espanish </li>
                        </ul>

                    </Row>      

                    <CfgArea />
                    <Table data={this.state.staticDate}/> />
                    

            </div>
        )
    }
}

export default PageManager