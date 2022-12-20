import React, { useContext } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { MenuContainer, MenuContent } from './styles'

import { UserContext } from '../../context/userContext'
import Hoje from '../hoje'
import { useNavigate } from 'react-router-dom'

function Menu() {
    const {user, habits, setHabits, conclud, setConclud} = useContext(UserContext)
    const navigate = useNavigate()
        
    if(!user){
        return null
    }

    return (
        <MenuContainer>
            <MenuContent data-test="menu">
                <button onClick={() => navigate("/habitos")} data-test="habit-link">Hábitos</button>
                <button className='circular' onClick = {() => navigate("/hoje")} data-test="today-link">
                    <CircularProgressbar 
                        styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })} 
                        text = {'Hoje'}
                        value = {conclud}
                        maxValue = {habits.length}
                        />
                </button>
                <button onClick={() => navigate('/historico')}  data-test="history-link">Histórico</button>
            </MenuContent>
        </MenuContainer>
    )
}

export default Menu