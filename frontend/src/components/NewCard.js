import React, { Component } from 'react'

// Element Import
import ButtonRadio from '../elements/ButtonRadio'
import CheckBox from '../elements/CheckBox'

// Extenal Library 
import { Row , Col } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

class NewCard extends Component {
    render() {
        return(
            <div className='pageManager'>
                    
                    <label className='pageTitle'>NewCard 
                        <span className='pageSubtitle'>create a new card to post latter</span>
                    </label> 

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
                                    curveColor='yellowCurve'/>
                                
                        </Col>

                        <Col md={3} className='radioGroup'>                     
                                <input type='radio' name='cardTypes' id='bt2' className='radioBox'></input>        
                                <ButtonRadio 
                                    bgColor='blue' 
                                    for='bt2'
                                    buttonTitle='Feature'
                                    icon='featured_play_list'
                                    iconColor='#fff'
                                    curveColor='blueCurve'/>     
                        </Col>

                        <Col md={3} className='radioGroup'>                     
                                <input type='radio' name='cardTypes' id='bt3' className='radioBox'></input>              
                                <ButtonRadio 
                                    bgColor='red' 
                                    for='bt3'
                                    buttonTitle='Big Feature'
                                    icon='featured_video'
                                    iconColor='#fff'
                                    curveColor='redCurve'/>      
                        </Col>

                        <Col md={3} className='radioGroup'>                        
                                <input type='radio' name='cardTypes' id='bt4' className='radioBox'></input>      
                                <ButtonRadio 
                                    bgColor='purple' 
                                    for='bt4'
                                    buttonTitle='Preview Feature'
                                    icon='visibility'
                                    iconColor='#fff'
                                    curveColor='purpleCurve'/>                 
                        </Col>


                    </Row> 

                    <Row className='whiteBox'>
                    
                        <label className='titleRadioGroup'>2 STEP -  Define propeties for your card</label>


                        <Col md={6}>

                            <div className='formBlock'>
                                <label className='formTitle'> Slug Name <span className='required'> *Required </span> </label>
                                <label className='formDescription'>This a general properties, used to identify your card</label>
                                <input type='text' className='inputText'></input>
                            </div>      

                            <div className='formBlock'>
                                <label className='formTitle'> Language <span className='required'> *Required </span> </label>
                                <label className='formDescription'>Card hyperlink that links to a particular item</label>
                                
                                <div className='selectGroup'>                                     
                                    <select className='select'>
                                        
                                        <option>Portuguese</option>
                                        <option>English</option>
                                        <option>Spanish</option>
                                    
                                    </select>                                     
                                    <MaterialIcon icon='arrow_drop_down' id='selectArrow' />  
                                </div>
                                
                            </div>

                        </Col>

                        <Col md={6}>

                            <div className='formBlock'>
                                <label className='formTitle'> DeepLink <span className='required'> *Required </span> </label>
                                <label className='formDescription'>Card hyperlink that links to a particular item</label>
                                
                                <div className='selectGroup'>                                     
                                    <select className='select'>
                                        
                                        <option>teste</option>
                                        <option>teste</option>
                                        <option>teste</option>
                                        <option>teste</option>
                                        <option>teste</option>
                                        <option>teste</option>
                                        <option>teste</option>
                                    
                                    </select>                                     
                                    <MaterialIcon icon='arrow_drop_down' id='selectArrow' />  
                                </div>
                                
                            </div>

                        </Col>

                        <CheckBox id='fixedCard' colSize={12} text='Is that a fixed card?' />

                    </Row>

            </div>
        )
    }
}

export default NewCard