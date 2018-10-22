import React from 'react'

// External Library
import {Row, Col} from 'react-bootstrap'
import MaterialIcons from 'material-icons-react'

export default props => (
                           
        <label className='buttonRadioDefault' id={props.bgColor} htmlFor={props.for}>
        
            <span className='buttonText'>{props.buttonTitle}</span>
            <span className='buttonImage'><MaterialIcons icon={props.icon} color={props.iconColor} /></span>
            <span className='buttonCurve' id={props.curveColor}></span>
        
        </label>
            
)

