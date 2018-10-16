import React, { Component } from 'react'

// Extenal Library 
import { Row , Col } from 'react-bootstrap'

// Components Imports
import CfgArea from './CfgArea'
import Table from './TableResultPage'

// Styles Import
import '../style/cfgArea.css'

class PageManager extends Component {
    render() {
        return(
            <Col md={12} className='pageManager'>
                    
                    <label className='pageTitle'>PageManager 
                        <span className='pageSubtitle'> this is the result page of your app</span>
                    </label> 

                    <Row className='langMenu'>
                    
                        <ul>
                            <li>Portuguese </li>
                            <li>English </li>
                            <li>Espanish </li>
                        </ul>

                    </Row>      

                    <CfgArea />
                    <Table />
                    

            </Col>
        )
    }
}

export default PageManager