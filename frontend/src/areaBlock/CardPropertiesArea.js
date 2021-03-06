import React from 'react'

// External Library
import { Row, Col } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

// Element Import
import CheckBox from '../elements/CheckBox'

export default props => (
    <Row className='whiteBox'>

        <label className='titleRadioGroup'>2 STEP -  Define your card <span className='spanTitle'> properties </span></label>


        <Col md={6}>

            <div className='formBlock'>
                <label className='formTitle'> Slug Name <span className='required'> *Required </span> </label>
                <label className='formDescription'>This a general properties, used to identify your card</label>
                <input type='text' className='inputText'></input>
            </div>

            <div className='formBlock'>
                <label className='formTitle'> Country <span className='required'> *Required </span> </label>
                <label className='formDescription'>Required country, to be filled on content</label>

                <div className='selectGroup'>
                    <select className='select'>

                        <option>Portuguese</option>
                        <option>English</option>
                        <option>Spanish</option>

                    </select>
                    <MaterialIcon icon='arrow_drop_down' id='selectArrow'/>
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
)

