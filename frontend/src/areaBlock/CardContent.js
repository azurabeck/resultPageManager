import React from 'react'

// External Library
import {Row, Col} from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

// Component Import
import Button from '../elements/Button'

export default props => (
    <Row className='whiteBox'>

        <label className='titleRadioGroup'>3 STEP -  Define your card <span className='spanTitle'> content </span></label>


        <Col md={12} className='contentGroup'>
        
            <MaterialIcon icon='play_arrow' />
            <ul>
                <li>Brasil </li>
                <li>Mexico </li>
                <li>United States </li>
            </ul>
        
        </Col>
        

        <Col md={12} className='contentBlock brasil'>
                
            <label className='pageSubtitle'>Brasil</label>            
            <MaterialIcon icon='arrow_drop_down' id='selectArrow' />
        
        </Col>

        <Col md={12} className='contentBlock mexico'>
                
            <label className='pageSubtitle'>Mexico</label>
            <MaterialIcon icon='arrow_drop_down' id='selectArrow' />
        
        </Col>

        <Col md={12} className='contentBlock usa'>
                
            <label className='pageSubtitle'>Usa</label>
            <MaterialIcon icon='arrow_drop_down' id='selectArrow' />
        
        </Col>

        

    </Row>
)

