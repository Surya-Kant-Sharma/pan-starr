import { useContext, createContext } from "react";
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from 'firebase/auth';
// import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import React from "react";


// @ts-ignore
const AuthContext : any = createContext();

export const AuthContextProvider = ({children} : any) => {

    const [user, setUser] : any = React.useState();

    const auth = getAuth();

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        console.log("googlesignin")
    }

    const logOut = () => {
        signOut(auth);
    }

    React.useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user", currentUser);
            setUser(currentUser)
        })

        return () => {
            unsuscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
         {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}