import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const UpdateProfile = () => {
    const {currentUser, updateUserProfile} = useAuth()

    const [name, setName] = useState("")
    const [photoURL, setPhotoURL] = useState("");
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleUpdateProfile =async (e)=>{
        e.preventDefault();

        try {
            
            await updateUserProfile({
                displayName: name || currentUser.displayName,
                photoURL: photoURL || currentUser.photoURL
            })
            alert("Profile Update Successfully")
            setSuccessMessage("Profile Update Successfully")
            setErrorMessage("")
        } catch (error) {

            setErrorMessage("Failed to Updated profile")
            setSuccessMessage("")
        }

    }
  return (
    <div className='p-8 space-y-4'>
        <h1 className='text-2xl font-bold'>Update Your Profile </h1>
        <p>Currently Display Name: {currentUser?.displayName || "Not Yet Set"}</p>
        {
            currentUser?.photoURL ? (<img src={currentUser?.photoURL} alt="" />) : <span>No Image Found</span>
        }

        {/* Update Profile Form */}

        <form onSubmit={handleUpdateProfile} className='shadow p-4 max-w-sm space-y-3'>
            <div className='space-y-2'>
                <label className='block'>Update your Name:</label>
                <input  
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" name="name" id="name" placeholder='Set new name' className='border p-2 '/>
            </div>

            <div className='space-y-2'>
                <label className='block'>Update Photo</label>
                <input 
                value={photoURL}
                onChange={(e)=>setPhotoURL(e.target.value)}
                
                type="text" name="photoURL" id="photoURL" placeholder='Update photo by URL' className='border p-2 '/>
            </div>
            <button type="submit" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer'>Update Profile</button>
            {
                successMessage && <p className='text-green-500 text-sm italic'>{successMessage}</p>
            }
            {
                errorMessage && <p className='text-red-500 text-sm italic'>{errorMessage}</p>
            }
        </form>
    </div>
  )
}

export default UpdateProfile 