import React, { Component } from 'react'

// Extenal Library 
import { Row } from 'react-bootstrap'

// Components Imports
import Table from './TableResultPage'

// Styles Import
import '../style/cfgArea.css'

class CardCreator extends Component {
    render() {
        return(
            <div className='pageManager'>
                    
                    <label className='pageTitle'>CardCreator 
                        <span className='pageSubtitle'> here you create cards to show on result page</span>
                    </label> 

                    <Row className='langMenu'>
                    
                        <ul>
                            <li>Portuguese </li>
                            <li>English </li>
                            <li>Espanish </li>
                        </ul>

                    </Row>      

                    <Table />
                    

            </div>
        )
    }
}

export default CardCreator