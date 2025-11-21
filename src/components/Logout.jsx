import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const Logout = () => {
    const handleLogout = () => {

                const auth = getAuth(app);

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
    <div className='mt-8'>
            <button onClick={handleLogout} className='px-5 py-2 bg-red-500 font-semibold rounded'>Logout</button>
    </div>
  )
}

export default Logout