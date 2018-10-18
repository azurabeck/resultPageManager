import React from 'react'

// External Library
import {Row, Col} from 'react-bootstrap'

export default props => (
    <Row>      
        <Col md={12} className='cfgArea'>

            <table>

                <thead className='tableHeader'>
                    <tr>
                        <th>Slug Name</th>
                        <th>Card Type</th>
                        <th>Segment</th>
                        <th>Languages</th>
                        <th>Last Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='tableBody'>
                    <tr>
                        <td>Test Name</td>
                        <td>Ad</td>
                        <td>Have[x] feature enabled</td>
                        <td>PT - EN - ES</td>
                        <td>15/10/2018 - 16:09:24</td>
                        <td>
                            ICON 
                        </td>
                    </tr>
                    <tr>
                        <td>Test Name</td>
                        <td>Feature</td>
                        <td>15/10/2018 - 16:09:24</td>
                        <td>15/10/2018 - 16:09:24</td>
                        <td>15/10/2018 - 16:09:24</td>
                        <td>15/10/2018 - 16:09:24</td>
                    </tr>                   
                </tbody>

            </table>
            
        
        </Col>      
    </Row>
)

