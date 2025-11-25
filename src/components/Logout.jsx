import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useAuth } from '../context/AuthContext';

const Logout = () => {

    const {currentUser} = useAuth();
    console.log(currentUser)


    const auth = getAuth(app);

    const handleLogout = () => {

                signOut(auth).then(() => {
                // Sign-out successful.
                alert("User Logout Successfully ")
                }).catch((error) => {
                // An error happened.
                console.log(error.message)
                });
        console.log("Logout Button Clicked")
    }
  return (
    <div className='my-8'>
            <p className='font-medium mb-3'>User: {currentUser?.displayName}</p>
            <button onClick={handleLogout} className='px-5 py-2 bg-red-500 font-semibold rounded'>Logout</button>
    </div>
  )
}

export default Logout