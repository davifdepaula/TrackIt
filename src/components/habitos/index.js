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
    if(!name) return alert('É necessario nomear o hábito!')
    axios.post(url, {name, days}, config)
      .then(response => {
        setHabits([...habits, response.data])
        setName("")
        setDays([])
        setShowFormBox(false)
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
        <FormBox data-test="habit-create-container">
            <form>
              <input 
                data-test="habit-name-input" 
                value={name} 
                placeholder='nome do hábito' 
                onChange={ (e) => setName(e.target.value)}
                disabled = {loading}/>

              <div className='buttons'>
                {weekDays.map((day, index) => 
                <SelectButton color = {days.includes(index)? ('#CFCFCF'):('#FFFFFF')} >
                  <button 
                    data-test="habit-day"
                    key = {index} 
                    onClick={(e) => selectDays(index, e)}
                    disabled = {loading}>{day}</button> 
                </SelectButton>)}
                                
              </div>
              
              <div className='submitButtons'>

                <span 
                  data-test="habit-create-cancel-btn" onClick={cancelBox}
                  disabled = {loading}>
                  Cancelar
                </span> 

                <button 
                  data-test="habit-create-save-btn" onClick={(e) => handleSubmit(e)}
                  disabled = {loading}>
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
          <HabitsContent data-test="habit-container" key = {index}>
            <Title>
              <div data-test="habit-name" >{habit.name}</div>

              <div data-test="habit-delete-btn" onClick={() => habitDelet(habit.id)}>
                <ion-icon name="trash-outline"></ion-icon>
              </div>
            </Title>

            <div className='Habitbuttons'>
                {weekDays.map((day, index) => 
                <SelectButton color = {habit.days? (habit.days.includes(index)? ('#CFCFCF'):('#FFFFFF')) : (null)} >
                  <button data-test="habit-day" key = {index}> {day} </button> 
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
        <button 
          data-test="habit-create-btn" 
          onClick={() => {setShowFormBox(true)}}
          disabled = {loading}>+</button>
      </Top>

      {showForm()}
      {showHabits()}
      {showText()}
    </HabitsContainer>
  )
}

export default Habitos