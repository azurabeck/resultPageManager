import React from 'react'

// External Library
import {Row, Col} from 'react-bootstrap'
import MaterialIcons from 'material-icons-react'

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
        
             <button className='previewCfg' >
            
                <label className='buttonText'>Preview CFG</label>                
                <label className='buttonImage'><MaterialIcons icon='visibility' color='#efefef' /></label>
                <label className='yellowCurve'></label>
            
            </button>
                        
            <button className='downloadCfg' >
            
                <label className='buttonText'>Download CFG</label>
                <label className='buttonImage'><MaterialIcons icon='get_app' color='#efefef' /></label>
                <label className='blueCurve'></label>
            
            </button>
            
        
        </Col>      
    </Row>
)

