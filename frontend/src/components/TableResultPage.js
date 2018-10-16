import React from 'react'

// External Library
import {Row, Col} from 'react-bootstrap'
import MaterialIcons from 'material-icons-react'

export default props => (
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
                    <tr>
                        <td>Quick Cleanup</td>
                        <td>Published</td>
                        <td>15/10/2018 - 16:09:24</td>
                    </tr>
                    <tr>
                        <td>Quick Cleanup</td>
                        <td>Published</td>
                        <td>15/10/2018 - 16:09:24</td>
                    </tr>
                    <tr>
                        <td>Quick Cleanup</td>
                        <td>Published</td>
                        <td>15/10/2018 - 16:09:24</td>
                    </tr>
                    <tr>
                        <td>Quick Cleanup</td>
                        <td>Published</td>
                        <td>15/10/2018 - 16:09:24</td>
                    </tr>
                </tbody>

            </table>
            
        
        </Col>      
    </Row>
)

