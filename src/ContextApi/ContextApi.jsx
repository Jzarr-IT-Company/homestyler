
import { createContext, useContext, useState, } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)

let GlobalStates = (children) => {
    const [subCategoryname, setSubCategoryName] = useState("")
    const [productCounting, setProductCounting] = useState("");
    const [deleteCount, setDeleteCount] = useState(0)
    const [navbarNavigation, setNavbarNavigation] = useState(false);

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