import React, { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from "react-icons/fa6";

const UpdatePassword = () => {
    const [message, setMessage] = useState("")
    const [newPassword, setNewPassword] =useState("")
    const [confirmPassword, setConfirmPassword] =useState("")
    const [showPassword, setShowPassword] =useState(false)

    const handlePasswordUpdate = (e)=>{
        e.preventDefault();

        console.log("new password:", newPassword)
        console.log("Confirm Password:", confirmPassword)


    }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
       <div className='w-full max-w-md p-6 space-y-6 bg-white shadow-md rounded-lg '>
            <h2 className='text-2xl text-center font-bold text-gray-800'>Update Password</h2>
            {
                message && <p className={`p-2 text-center ${message.includes("successfully") ? "text-green-500" : "text-red-600"}`}>{message}</p>
            }
            <form onSubmit={handlePasswordUpdate} className='space-y-4'>
                <div className='relative'>
                    <label className='block mb-2 text-sm font-medium  text-gray-700'>New Password</label>
                    <input 
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}
                    
                    type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Enter new password' className='border w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'/>

                    <div 
                    onChange={()=> setShowPassword(!showPassword)}
                    className='absolute flex bottom-3 right-0 items-center pr-3 cursor-pointer'> 
                        {
                            showPassword ? <FaEyeSlash className='text-gray-600'/> : <FaEye className='text-gray-600'/>
                        }
                    </div>
                </div>
                <div className='relative'>
                    <label className='block mb-2 text-sm font-medium  text-gray-700'>Confirm Password</label>
                    <input 

                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    
                    type={showPassword ? "text" : "password"} name="confirmpassword" id="confirmpassword" placeholder='Confirm new password' className='border w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'/>

                    <div 
                    onClick={()=> setShowPassword(!showPassword)}
                    className='absolute flex bottom-3 right-0 items-center pr-3 cursor-pointer'> 
                        {
                            showPassword ? <FaEyeSlash className='text-gray-600'/> : <FaEye className='text-gray-600'/>
                        }
                    </div>
                </div>

                <button type="submit" className='bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-800'>Update Password</button>
            </form>
       </div>
    
    </div>
  )
}

export default UpdatePassword 