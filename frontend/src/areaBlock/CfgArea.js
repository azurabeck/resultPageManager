import React from 'react'

// External Library
import {Row, Col} from 'react-bootstrap'

// Component Import
import Button from '../elements/Button'

export default props => (
    <Row>      
        <Col md={12} className='cfgArea'>

            <label className='cfgText'> 
            
                CFG AREA 
                <p className='cfgDescription'>
                    The cvg preview or download is related to the activated language
                </p>

                <span className='cfgSpan'>Portuguese</span>
             </label>        

            <Button bgColor='yellow' buttonTitle='Preview CFG' icon='visibility' iconColor='#efefef' curveColor='yellowCurve'/>        
            <Button bgColor='blue' buttonTitle='Download CFG' icon='get_app' iconColor='#efefef' curveColor='blueCurve'/>
         
        
        </Col>      
    </Row>
)

