import React, { Component } from 'react'

// Extenal Library 
import { Row } from 'react-bootstrap'

// Components Imports
import CfgArea from '../elements/CfgArea'
import Table from '../elements/TableResultPage'

// Styles Import
import '../style/cfgArea.css'

class PageManager extends Component {
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
                    <Table />
                    

            </div>
        )
    }
}

export default PageManager