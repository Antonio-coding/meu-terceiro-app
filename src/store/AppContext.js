import { createContext,useContext} from "react";

export const Context = createContext ({});

export const useAppContext = () => useContext (Context);

export const AppContext =  ({ children }) => {
    return (
        <Context.Provider value={{ name: 'Minha Loja de Roupas' }}>
            {children}
        </Context.Provider>
    )
}