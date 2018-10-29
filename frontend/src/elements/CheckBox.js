import React from 'react'

// External Library
import {Col} from 'react-bootstrap'

export default props => (
                           
    <Col md={props.colSize}>

        <div className='checkBoxGroup'>

            <input type='checkbox' id={props.id} />
            <label className='customCheckBox' htmlFor={props.id} />
            <label className='checkBoxTitle' htmlFor={props.id}>{props.text}</label>

        </div>

    </Col>
            
)

