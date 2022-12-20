import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { HabitsContainer, Top, Title, HabitsContent } from './styles'
import dayjs from 'dayjs'

import { UserContext } from '../../context/userContext'

function Hoje() {
  const {user, habits, setHabits} = useContext(UserContext)

  const date = dayjs().locale('br')
  console.log(date.month() + 1)
  console.log(date.D() + 1)

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }

  function fetchHabitsToday(){
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    axios.get(url, config)
      .then((response) => setHabits([...response.data]))
      .catch(error => error.response.data.message)
  }

  useEffect(() => {
    fetchHabitsToday()
  }, [])

  function showHabits(){
      return (
      habits.map((habit, index) => {
        return (
          <HabitsContent key = {index}>
            <Title>
              <div>{habit.name}</div>
            </Title>
          </HabitsContent>
        )
      })
    )
}



  return (
    <HabitsContainer>
      <Top>
        <div>um dia</div>
      </Top>
      {showHabits()}
    </HabitsContainer>
  )
}

export default Hoje