import React, { Component } from 'react'

// Extenal Library 
import MaterialIcon from 'material-icons-react'

// Images import
import Logo from '../images/logo-icon.svg'



class SideMenu extends Component {
    render() {
        return(

            <aside className='sideMenu'>
            
                <div className='menuTitle'>
                        <img src={Logo} height='50' /><br />
                        <label className='menuAreaName'>Inner<span className='red'>Tools</span></label><br />
                        <label className='menuSiteName'>Result-Page Man.</label>
                </div>

                <ul className='menuSite'>
                        <li>
                            <MaterialIcon icon='devices' color='#c0c4c9'/>
                            <label className='textMenu'>Page Manager</label>
                        </li>
                        <li>
                            <MaterialIcon icon='dns' color='#c0c4c9'/>
                            <label className='textMenu'>Card Creator</label>
                        </li>
                        <li>                            
                            <MaterialIcon icon='lock' color='#c0c4c9' />
                            <label className='textMenu'>Acces Control</label>
                        </li>
                </ul>
            
            </aside>


        )
    }
}

export default SideMenu