import { useState, createContext } from "react"
import {TailSpin} from 'react-loader-spinner'
const LoadingContext = createContext()

function LoadingProvider({children}){
    const [loading, setLoading] = useState(false)
    return (
        <LoadingContext.Provider value = {{loading, setLoading, TailSpin}}>
            {children}
        </LoadingContext.Provider>
    )
}

export {LoadingContext, LoadingProvider}