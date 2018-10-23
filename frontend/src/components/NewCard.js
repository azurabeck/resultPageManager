import React, { Component } from 'react'

// Block Import
import CardTypeArea from '../areaBlock/CardTypeArea';
import CardPropertiesArea from '../areaBlock/CardPropertiesArea';
import CardContent from '../areaBlock/CardContent';


// Extenal Library 
import { Row , Col } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

class NewCard extends Component {
    render() {
        return(
            <div className='pageManager'>
                    
                    <label className='pageTitle'>NewCard 
                        <span className='pageSubtitle'>create a new card to post later</span>
                    </label> 

                    <CardTypeArea />
                    <CardPropertiesArea />
                    <CardContent />
                    

            </div>
        )
    }
}

export default NewCard