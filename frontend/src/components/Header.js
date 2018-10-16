import React, { Component } from 'react'

// Extenal Library 
import { Row, Col } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

class Header extends Component {
    render() {
        return(
            <Row className='header'>
                <Col md={12} className='headerItens'>

            
                    <div className='searchGroup'>                        
                        <span id='searchIcon'><MaterialIcon icon='search'/></span>        
                        <input 
                            className='inputSearch'
                            type='text'                    
                            placeholder='Search by title' />                              
                    </div>
                
                    <label className='user'>
                        <span className='userName'>UserName</span>
                        <MaterialIcon icon='account_circle' color='#36404E' />
                    </label>

                    <button className='filterButton' >
                        <MaterialIcon icon='filter_list' color='#efefef' />
                    </button>                    

                </Col>
            </Row>
        )
    }
}

export default Header