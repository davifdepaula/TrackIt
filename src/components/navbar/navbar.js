import React, { useContext } from 'react'

import { NavbarContent } from './styles'
import { UserContext } from '../../context/userContext'

function Navbar() {
    const {user} = useContext(UserContext)

    if (!user) {
        return null
    }
    
    return (
        <NavbarContent data-test="header">
            <div>TrackIt</div>
            <img src={user.image}/>
        </NavbarContent>
    )
}

export default Navbar