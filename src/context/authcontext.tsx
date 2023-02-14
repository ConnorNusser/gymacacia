import { useContext, createContext} from "react";

const AuthContext = createContext();

export const AuthContextProvider = (children: any) => {
    return (
        <AuthContext.Provider value = {{}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() => {
    return useContext(AuthContext)
}