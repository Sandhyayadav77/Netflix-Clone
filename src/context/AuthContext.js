import { createContext, useEffect, useContext, useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext();

//export AuthContext
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})

    //  provider states
    // create user 
    const signUp = (email, password) => {
         createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedShows: []
        });
    }
    // sign in  
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out or log out
    const logOut = () => {
        return signOut(auth)
    }
    //  on Auth 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => unSubscribe();
    })

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}


export function UserAuth() {
    return useContext(AuthContext)
}