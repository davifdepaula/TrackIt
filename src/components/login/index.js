import axios from 'axios'
import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContainer, LoginContent } from './styles'
import {LoadingContext} from '../../context/loadingContext'
import { UserContext } from '../../context/userContext'


function Login({logo}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loading, setLoading, TailSpin} = useContext(LoadingContext)
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    function handleSubmit(event) {
      event.preventDefault()
      setLoading(true)

      const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`
      axios.post(url, {email, password})
        .then(response => {
          navigate('/hoje')
          setUser({...response.data})
          setLoading(false)
        })
        .catch(error => {
          alert(error.response.data.message)
          setLoading(false)
        })

        setEmail('')
        setPassword('')  

    }

  if (loading){
    return(
      <LoginContainer> <TailSpin color="#52B6FF" /> </LoginContainer>
    )
  }  
  return (
    <LoginContainer>
        <LoginContent>
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

                <button 
                  type='submit' 
                  data-test="login-btn" 
                  disabled = {loading}>Entrar</button>
                <Link 
                  to ='/cadastro' 
                  data-test="signup-link"
                > Não tem uma conta? Cadastre-se!</Link>
            </form>
        </LoginContent>
    </LoginContainer>
  )
}

export default Login