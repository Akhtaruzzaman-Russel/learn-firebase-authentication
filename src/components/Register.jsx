import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from './../firebase/firebase.config';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message, setMessage] = useState("");
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
                    sendEmailVerification(user)
                    .then(() => {
                        // Email verification sent!
                        setMessage("Registration Successful! A verificatiobn email send to your Email Address")
                        console.log("Verification Email has been sent", user.email)

                    }).catch(error=> console.error("Error sending verification email", error.message))

                    // optional for navigating to login page
                    setTimeout(()=>{
                            alert("Registration Successful")
                            navigate("/login")

                            console.log("User Signed:", user)

                    }, 5000)


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

            {
                message && <p className='text-red-600 italic text-sm my-1'>{message}</p>
            }

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

            {/* Social Login Details */}
            <div className='text-center space-y-4'>
              <p className='text-gray-600'>Or Sign Up with</p>
              <div className='flex justify-center space-x-4'>
                <button className=' flex items-center px-4 py-2 space-x-2 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer'> <FaGoogle /> <span>Google</span> </button>
                <button className='flex items-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer'> <FaFacebook /> <span> Facebook </span> </button>
                <button className='flex items-center px-4 py-2 space-x-2 bg-gray-900 text-white rounded hover:bg-gray-700 cursor-pointer'> <FaGithub /> <span> GitHub </span> </button>
              </div>
            </div>

            <p className='text-sm text-center text-gray-600'>Already have a account? Please <Link to="/login" className='text-blue-600 hover:underline font-medium'>Log In</Link> </p>
        </div>
        
        

    </div>
  )
}

export default Register 