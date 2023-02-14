import { useContext, createContext} from "react";
import { GoogleAuthProvider, 
        signInWithPopup, 
        signInWithRedirect,
        signOut,
        onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase";



export const AuthContextProvider = ({children}: any) => {
    const AuthContext = createContext();
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    return (
        <AuthContext.Provider value = {{googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() => {
    const AuthContext = createContext('hi');
    return useContext(AuthContext)
}