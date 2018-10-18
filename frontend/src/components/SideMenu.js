import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Extenal Library 
import MaterialIcon from 'material-icons-react'

// Images import
import Logo from '../images/logo-icon.svg'



class SideMenu extends Component {
    render() {
        return(

            <aside className='sideMenu'>
            
                <div className='menuTitle'>
                        <img src={Logo} height='50' alt='' /><br />
                        <label className='menuAreaName'>Inner<span className='red'>Tools</span></label><br />
                        <label className='menuSiteName'>Result-Page Man.</label>
                </div>

                <ul className='menuSite'>

                        <Link to='/'>
                            <li>
                                <MaterialIcon icon='devices' color='#c0c4c9'/>
                                <label className='textMenu'>Page Manager</label>                            
                            </li> 
                       </Link>

                       <Link to='/cardCreator'>
                            <li>                            
                                <MaterialIcon icon='dns' color='#c0c4c9'/>
                                <label className='textMenu'>Card Creator</label>                            
                            </li>
                        </Link>

                        <Link to='/accessControl'>
                            <li>                            
                                <MaterialIcon icon='lock' color='#c0c4c9' />
                                <label className='textMenu'>Acces Control</label>
                            </li>
                        </Link>
                        
                </ul>
            
            </aside>


        )
    }
}

export default SideMenu