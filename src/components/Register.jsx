import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './../firebase/firebase.config';

const Register = () => {

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const auth = getAuth(app);
          const navigate = useNavigate()

    // console.log(auth)

    // console.log("Email: ", email)
    // console.log("Password: ", password)

    const handleRegister = (e)=> {
        e.preventDefault()
  

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert("Registration Successful")
            navigate("/login")

            console.log("User Signed:", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage)
        });
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>

        <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-center text-gray-800'>Please Register here</h2>

            <form onSubmit={handleRegister} className='space-y-4'>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value) } type="email" name="email" id="email" placeholder='Enter your Email' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'/>
                </div>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Password: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Enter your password' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'/>
                </div>
                <button type="submit" className='w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Sign Up</button>
            </form>

            <p className='text-sm text-center text-gray-600'>Already have a account? Please <Link to="/login" className='text-blue-600 hover:underline font-medium'>Log In</Link> </p>
        </div>
        
        

    </div>
  )
}

export default Register 