import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import app from '../firebase/firebase.config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

      const [email, setEmail] = useState("")
      const [password,setPassword] = useState("")
      const [error, setError] = useState("")
      const auth = getAuth(app);

      const navigate = useNavigate()

      // console.log(email)
      // console.log(password)




      const handleLogin =(e)=>{
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login Successful!")
            navigate("/")
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            setError("Invalid user email or password! Please type correct one")
          });
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>

        <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-center text-gray-800'>Login here</h2>

            <form onSubmit={handleLogin} className='space-y-4'>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value) } type="email" name="email" id="email" placeholder='Enter your Email' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'/>
                </div>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Password: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Enter your password' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'/>
                </div>

                {
                  error && <p className='text-sm italic text-red-500'>{error}</p>
                }
                <button type="submit" className='w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Log In</button>
            </form>

            <p className='text-sm text-center text-gray-600'>Don't have a account? Please <Link to="/register" className='text-blue-600 hover:underline font-medium'> Sign Up</Link> </p>
        </div>
        
        

    </div>
  )
}

export default Login 