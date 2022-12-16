import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { LoginContainer, LoginContent } from './styles'


function Login() {

    const navigate = useNavigate
  return (
    <LoginContainer>
        <LoginContent>
            <img src = {logo} alt ='logo'/>
            <form>
                <input data-test="email-input" type='email' placeholder='email'/>
                <input data-test="password-input" type='password' placeholder='senha'/>
                <button data-test="login-btn">Entrar</button>
                <Link to ='/cadastro' data-test="signup-link"> Não tem uma conta? Cadastre-se!</Link>
            </form>
        </LoginContent>
    </LoginContainer>
  )
}

export default Login