
import { createContext, useContext, useState, } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)

let GlobalStates = (children) => {
    const [subCategoryname, setSubCategoryName] = useState("")

    return <GlobalContext.Provider value={{
        subCategoryname, setSubCategoryName
    }}>
        {children.children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}