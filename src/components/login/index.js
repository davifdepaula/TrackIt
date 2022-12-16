import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { LoginContainer, LoginContent } from './styles'


function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate

    function handleSubmit(event) {
      event.preventDefault()

      const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`
      axios.post(url, {email, password})
        .then(response => navigate('/hoje'))
        .catch(error => alert(error.response.data.message))
        setEmail('')
        setPassword('')  
      return
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
                  onChange={(event) => setEmail(event.target.value) }/>

                <input 
                  data-test="password-input" 
                  type='password' 
                  value={password} 
                  placeholder='senha' 
                  onChange={(event) => setPassword(event.target.value) }/>

                <button type='submit' data-test="login-btn">Entrar</button>
                <Link to ='/cadastro' data-test="signup-link"> Não tem uma conta? Cadastre-se!</Link>
            </form>
        </LoginContent>
    </LoginContainer>
  )
}

export default Login