import React, { useContext, useState } from 'react'
import {LoadingContext} from '../../context/loadingContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { RegisterContainer, RegisterContent } from './styles'
import axios from 'axios'

function Cadastro({logo}) {
  const {loading, setLoading, TailSpin} = useContext(LoadingContext)
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  function handleSubmit(){
    setLoading(true)
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    axios.post(url, { email, name, image, password })
      .then(response => {
        navigate("/")
        setLoading(false)
      })
      .catch(error => {
        alert(error.response.data.message)
        setLoading(false)
      })

    setEmail("")
    setPassword("")
    setName("")
    setImage("")

  }

  return (
    <RegisterContainer>
        <RegisterContent loading = {loading}>
            <img src = {logo} alt ='logo'/>

            <form onSubmit={handleSubmit}>
                <input 
                  data-test="email-input" 
                  type='email' 
                  value={email} 
                  placeholder='email' 
                  onChange={(event) => setEmail(event.target.value) }
                  disabled = {loading}/>

                <input 
                  data-test="password-input" 
                  type='password' 
                  value={password} 
                  placeholder='senha' 
                  onChange={(event) => setPassword(event.target.value) }
                  disabled = {loading}/>

                <input 
                  data-test="user-name-input"
                  type='text' 
                  value={name} 
                  placeholder='Nome' 
                  onChange={(event) => setName(event.target.value) }
                  disabled = {loading}/>

                <input 
                  data-test="user-image-input" 
                  type='url' 
                  value={image} 
                  placeholder='foto' 
                  onChange={(event) => setImage(event.target.value) }
                  disabled = {loading}/>

                <button className='register'
                  type='submit' 
                  data-test="signup-btn" 
                  disabled = {loading}>
                    {loading? 
                      <TailSpin color="#FFFFFF" height= '20px' /> 
                      : <span onClick={handleSubmit}>Cadastrar</span>}
                </button>
                <Link to ='/' data-test="login-link"> Já tem cadastro? Faça Login!</Link>
            </form>
        </RegisterContent>
    </RegisterContainer>
  )
}

export default Cadastro