import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import { LoadingContext } from '../../context/loadingContext'
import { HabitsContainer, Top, FormBox, SelectButton, HabitsContent, Title } from './styles'

const weekDays = [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ]

function Habitos() {
  const {user, habits, setHabits} = useContext(UserContext)
  const {loading} = useContext(LoadingContext)
  const [showFormBox, setShowFormBox] = useState(false)
  const [name, setName] = useState('')
  const [days, setDays] = useState([])
  

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }

  function fetchHabits(){
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
    axios.get(url, config)
      .then(response => setHabits([...response.data]))
      .catch(error => console.log(error.response.data.message))
  }

  useEffect(() => {
    fetchHabits()
  }, [habits])

  function showText(){
    if (habits.length === 0){
      return (
        <div className='noHabits'>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </div>
      )
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    axios.post(url, {name, days}, config)
      .then(response => {
        setHabits([...habits, response.data])
        setName("")
        setDays([])
      })
      .catch(error => console.log(error.response.data.message))
  }
  
  function cancelBox(){
    setShowFormBox(false)
  }

  function selectDays(index, e){
    e.preventDefault()

    if(!days.includes(index)){
      setDays([...days, index])
    }
    
    else {
      const temp = days.filter((day) => {
        if(day !== index){
          return day
        }
      })
      setDays([...temp])
    }
  }

  function showForm(){
    if(showFormBox){
      return(
        <FormBox>
            <form>
              <input value={name} placeholder='nome do hábito' onChange={ (e) => setName(e.target.value)}/>

              <div className='buttons'>
                {weekDays.map((day, index) => 
                <SelectButton color = {days.includes(index)? ('#CFCFCF'):('#FFFFFF')} >
                  <button 
                    key = {index} 
                    onClick={(e) => selectDays(index, e)}>{day}</button> 
                </SelectButton>)}
                                
              </div>
              
              <div className='submitButtons'>

                <span onClick={cancelBox}>
                  Cancelar
                </span> 

                <button onClick={(e) => handleSubmit(e)}>
                  Salvar
                </button>

              </div>
            </form>
        </FormBox>
      )
    }
  }

  function habitDelet(id){
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
    axios.delete(url, config)
      .then(response => {
        const temp =  habits.filter((habit) => {
          if(habit.id !== id) return habit
        })
      })
      .catch(error => console.log(error.response.data.message))
  }

  function showHabits(){
    if(habits.length > 0){
      return (
      habits.map((habit, index) => {
        return (
          <HabitsContent key = {index}>
            <Title>
              <div>{habit.name}</div>

              <div onClick={() => habitDelet(habit.id)}>
                <ion-icon name="trash-outline"></ion-icon>
              </div>
            </Title>

            <div className='Habitbuttons'>
                {weekDays.map((day, index) => 
                <SelectButton color = {habit.days.includes(index)? ('#CFCFCF'):('#FFFFFF')} >
                  <button key = {index}> {day} </button> 
                </SelectButton>)}                                
              </div>
          </HabitsContent>
        )
      })
    )}
  }

  return (
    <HabitsContainer>
      <Top>
        <div>Meus hábitos</div>
        <button onClick={() => {setShowFormBox(true)}}>+</button>
      </Top>

      {showForm()}
      {showHabits()}
      {showText()}
    </HabitsContainer>
  )
}

export default Habitos