import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

const AuthState = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    // Current User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.currentUser
    // const uid = currentUser.uid;

    console.log(currentUser.email)

    setUser(currentUser)

  } else {
    // User is signed out

    console.log("User not found")
  }
});

return ()=> unsubscribe();

    }, [auth])
  return (
    <div>
        
        {
            user ? <p> Welcome! Mr/Ms {user?.email} </p> : <p> Please Login Here.</p>
        }

    </div>
  )
}

export default AuthState