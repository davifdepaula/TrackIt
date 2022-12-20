import React, {useState, createContext} from "react"

const UserContext = createContext()

function UserProvider({ children }){
    const [user, setUser] = useState()
    const [habits, setHabits] = useState([])
    const [conclud, setConclud] = useState(0)
    return (
        <UserContext.Provider value = {{user, setUser, habits, setHabits, conclud, setConclud}} >
            {children}
        </UserContext.Provider>

    )
}

export {UserContext, UserProvider}
