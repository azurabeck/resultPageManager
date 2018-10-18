import React, { Component } from 'react'

// Extenal Library 
import { Row } from 'react-bootstrap'

// Components Imports
import Table from '../elements/TableCardCreator'
import ButtonAdd from '../elements/ButtonAdd'

// Styles Import
import '../style/cfgArea.css'

class CardCreator extends Component {
    render() {
        return(
            <div className='pageManager'>
                    
                    <label className='pageTitle'>CardCreator 
                        <span className='pageSubtitle'> Create cards to show on result page</span>
                    </label> 

                    <Table />      
                    <ButtonAdd />             

            </div>
        )
    }
}

export default CardCreator