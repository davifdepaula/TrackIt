import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { HabitsContainer, Top, Title, SubTitle, HabitsContent, Icon, Sequence } from './styles'
import dayjs from 'dayjs'

import { UserContext } from '../../context/userContext'

const weekArr = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
function Hoje() {
  const {user, habits, setHabits, conclud, setConclud} = useContext(UserContext)
  
  const date = dayjs(new Date()).locale('pt-br')
  const month =  date.month() + 1
  const day = date.date()
  const weekDay = weekArr[date.day()]
  

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
  }, [conclud])

  function showHabits(){
      return (
      habits.map((habit, index) => {
        return (
          <HabitsContent key = {index} data-test="today-habit-container">
            <Title>
              <div data-test="today-habit-name" >{habit.name}</div>
              <Icon color = {habit.done? ('#8FC549') : ('#666666')}>
                <div onClick={() => handleConcludSubmit(habit)} data-test="today-habit-check-btn"><ion-icon name="checkbox-outline"></ion-icon></div>
              </Icon>
            </Title>

            <Sequence color = {habit.done? ('#8FC549') : ('#666666')} >
              <div data-test="today-habit-sequence" >Sequência atual: <span>{habit.currentSequence} dias</span></div>
              <div data-test="today-habit-record" >Seu recorde: {habit.highestSequence} dias</div>

            </Sequence>


          </HabitsContent>
        )
      })
    )
}

function showSubTitle(){
  if(conclud === 0){
    return (
      <SubTitle data-test="today-counter">
        <div className='notConclud'>Nenhum hábito concluído ainda</div>
      </SubTitle>
    )
  }

  return (
    <SubTitle data-test="today-counter">
      <div className='conclud'>
        {parseInt((conclud/habits.length)*100)}% dos hábitos concluídos
      </div>
    </SubTitle>
  )
}

function handleConcludSubmit(habit){
  if(habit.done){
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`
    axios.post(url, {}, config)
      .then(response => setConclud(conclud - 1))
      .catch(error => console.log(error.response.data.message))    
    return
  }

  const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`
  axios.post(url, {}, config)
    .then(response => setConclud(conclud + 1))
    .catch(error => console.log(error.response.data.message))
}



  return (
    <HabitsContainer>
      <Top>
        <div data-test="today">{weekDay}, {day}/{month}</div>
        {showSubTitle()}
      </Top>
      {showHabits()}
    </HabitsContainer>
  )
}

export default Hoje