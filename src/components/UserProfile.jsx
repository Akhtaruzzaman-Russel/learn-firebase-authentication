import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router'

const UserProfile = () => {
    const {currentUser} = useAuth()
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='max-w-sm mx-auto shadow-md rounded-md py-12 px-8 space-y-4'>
            <h1 className='text-3xl font-bold'>User Profile Card</h1>
            <h2 className='text-gray-700 font-medium'>Welcome: {currentUser?.displayName || "User"}</h2>

            <div className='space-y-3'>
                <p className='text-sm'>Email: {currentUser?.email || "N/A"}</p>
                {
                    currentUser?.photoURL && <img src={currentUser?.photoURL} alt="Photo URL" className='shadow-lg rounded'/>
                }
                {/* <p className='text-sm'>Photo </p> */}
                <p className='text-sm'>Email Verified: {currentUser?.emailVerified ? "Yes" : "No"}</p>
                <p className='text-sm'>User ID: {currentUser?.uid} </p>
            </div>

                <div className='mt-10'>
                    <Link to="/update-profile" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer'>Edit Profile</Link>
                </div>

        </div>

    </div>
  )
}

export default UserProfile