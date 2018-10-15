import React, { Component } from 'react'

// Extenal Library 
import { Row, Col } from 'react-bootstrap'


class Header extends Component {
    render() {
        return(
            <Row className='header'>
                 <Col md={2} className='headerTitle'>InnerTools</Col>
                 <Col md={10} className='headerItens'>teste</Col>
            </Row>
        )
    }
}

export default Header