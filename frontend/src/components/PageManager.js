import React, { Component } from 'react'

// Extenal Library 
import { Row , Col } from 'react-bootstrap'

// Components Imports
import CfgArea from './CfgArea'

// Styles Import
import '../style/cfgArea.css'

class PageManager extends Component {
    render() {
        return(
            <Col md={10} className='pageManager'>
                    
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

            </Col>
        )
    }
}

export default PageManager