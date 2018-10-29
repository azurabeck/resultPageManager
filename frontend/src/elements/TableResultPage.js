import React, { Component } from 'react'

// External Library
import { Row, Col } from 'react-bootstrap'

class TableResultPage extends Component {

    render() {
        
       
        const { data } = this.props

        return (
            <Row>
                <Col md={12} className='cfgArea'>

                    <table>

                        <thead className='tableHeader'>
                            <tr>
                                <th>ResultPage Name</th>
                                <th>Page Status</th>
                                <th>Last Update</th>
                            </tr>
                        </thead>
                        <tbody className='tableBody'>
                            {
                                data.map((item, index) => 
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                    <td>{item.lastUpdate}</td>
                                </tr>
                                )
                            }
                        </tbody>

                    </table>

                </Col>
            </Row>

        )
    }
};


export default TableResultPage
