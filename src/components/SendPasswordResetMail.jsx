import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.config';


const SendPasswordResetMail = () => {
        const[email, setEmail] =useState("")
        const[message, setMessage] =useState("")
        const[isSuccess, setIsSuccess] =useState("false")

        const auth = getAuth(app);

       const handlePasswordReset = (e) => {
            e.preventDefault()
            if(!email){
                setMessage("Please enter your email address")
                setIsSuccess(false)
                return;
            }
            try {
                    sendPasswordResetEmail(auth, email)
                    .then(() => {
                        // Password reset email sent!
                        setMessage("Password reset email sent! Please check your inbox")
                        setIsSuccess(true)

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log("Getting an error to submit form", errorMessage)

                    });
                
            } catch (error) {
                console.error("Error sending password reset email", error.message)
                setMessage("Failed to send password reset email. Please try again")
                setIsSuccess(false);
            }
        }
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <div className='bg-white w-full max-w-md p-8 space-y-6 shadow-md rounded-lg'>
            <h2 className='text-2xl font-bold text-gray-800 text-center'>Reset Your Password</h2>
            {
                message && <p className={`p-2 text-center ${isSuccess ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>{message}</p>
            }

            <form onSubmit={handlePasswordReset} className='space-y-4'>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Email Address: </label>
                    <input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email" name="email" id="email" placeholder='Your Email' className='border w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent' />
                </div>
                <button type="submit" className='bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 '>Send Reset Email</button>
            </form>
        </div>
    </div>
  )
}

export default SendPasswordResetMail