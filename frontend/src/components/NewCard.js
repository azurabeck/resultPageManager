import React, { Component } from 'react'

// Block Import
import CardTypeArea from '../areaBlock/CardTypeArea';
import CardPropertiesArea from '../areaBlock/CardPropertiesArea';

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

                    <CardTypeArea />
                    <CardPropertiesArea />

                    

            </div>
        )
    }
}

export default NewCard