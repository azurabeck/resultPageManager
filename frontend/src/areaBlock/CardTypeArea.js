import React from 'react'

// External Library
import { Row, Col } from 'react-bootstrap'
import MaterialIcons from 'material-icons-react'

// Component Import
import ButtonRadio from '../elements/ButtonRadio'

export default props => (
    <Row className='whiteBox'>

        <label className='titleRadioGroup'>1 STEP -  Choose your card type</label>

        <Col md={3} className='radioGroup'>
            <input type='radio' name='cardTypes' id='bt1' className='radioBox'></input>
            <ButtonRadio
                bgColor='yellow'
                for='bt1'
                buttonTitle='Tools'
                icon='settings'
                iconColor='#fff'
                curveColor='yellowCurve' />

        </Col>

        <Col md={3} className='radioGroup'>
            <input type='radio' name='cardTypes' id='bt2' className='radioBox'></input>
            <ButtonRadio
                bgColor='blue'
                for='bt2'
                buttonTitle='Feature'
                icon='featured_play_list'
                iconColor='#fff'
                curveColor='blueCurve' />
        </Col>

        <Col md={3} className='radioGroup'>
            <input type='radio' name='cardTypes' id='bt3' className='radioBox'></input>
            <ButtonRadio
                bgColor='red'
                for='bt3'
                buttonTitle='Big Feature'
                icon='featured_video'
                iconColor='#fff'
                curveColor='redCurve' />
        </Col>

        <Col md={3} className='radioGroup'>
            <input type='radio' name='cardTypes' id='bt4' className='radioBox'></input>
            <ButtonRadio
                bgColor='purple'
                for='bt4'
                buttonTitle='Preview Feature'
                icon='visibility'
                iconColor='#fff'
                curveColor='purpleCurve' />
        </Col>


    </Row>
)

