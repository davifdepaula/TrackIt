import { useState, useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {AppContainer} from './styles.js'


import logo from '../../assets/logo.png'

import Login from "../login"
import Cadastro from "../cadastro"
import Hoje from "../hoje"
import Navbar from "../navbar/navbar"
import Menu from "../menu"
import Habitos from "../habitos"
import Historico from "../historico"

import { LoadingProvider } from "../../context/loadingContext.js"
import { UserProvider } from "../../context/userContext"




function App() {  
  return (
    <AppContainer> 
      <UserProvider>
        <LoadingProvider >     
          <BrowserRouter>
            <Navbar />
            <Menu/>
            <Routes>
              <Route path = '/' element ={<Login logo = {logo}/>} />
              <Route path = '/cadastro' element ={<Cadastro logo = {logo}/>} />
              <Route path = '/hoje' element ={<Hoje />} />
              <Route path = '/habitos' element ={<Habitos />} />
              <Route path = '/historico' element ={<Historico />} />
            </Routes>
          </BrowserRouter>        
        </LoadingProvider>
      </UserProvider>
    </AppContainer>
  )
}

export default App
