import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext);

const auth = getAuth(app);

export const AuthProvider = ({ children })=>{

    const [currentUser, setCurrentUser] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (user) => {
                            setLoading(false)
                            if (user) {
                               
                                // console.log("Auth Provider User: ", user )
                                setCurrentUser(user)

                            } else {
                                setCurrentUser(null)

                            }
                            });
            return ()=> unsubscribe()

    }, [auth])

    // Update Profile Functionality 
    const updateUserProfile = async (newProfile)=>{
        if(currentUser){
            try {
                await updateProfile(currentUser, newProfile);

                setCurrentUser((prevUser)=>({
                    ...prevUser,
                    ...newProfile
                }))
            } catch (error) {
                console.error("Error Updating Profile", error.message)
                
            }

        }else{
            throw new Error("No User is currently Sign In")
        }

    }

    const value = {currentUser, loading , updateUserProfile}
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}