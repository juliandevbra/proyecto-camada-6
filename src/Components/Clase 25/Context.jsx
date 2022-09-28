import { createContext, useContext, useState } from "react";

const GlobalStates = createContext()

const Context = ({children}) => {

    const [salario, setSalario] = useState(100000)
    const [plantelPoke, setPlantelPoke] = useState([])

 
    return (
        <GlobalStates.Provider
            value={{
                salario, 
                setSalario,
                plantelPoke,
                setPlantelPoke
            }}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export const useGlobalStates = () => {
    return useContext(GlobalStates)
}


export default Context