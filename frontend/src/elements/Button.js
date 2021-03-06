import React from 'react'

import MaterialIcons from 'material-icons-react'

export default props => (
                           
        <button className='buttonDefault' id={props.bgColor}>
        
            <label className='buttonText'>{props.buttonTitle}</label>
            <label className='buttonImage'><MaterialIcons icon={props.icon} color={props.iconColor} /></label>
            <label className='buttonCurve' id={props.curveColor}></label>
        
        </button>
            
)

