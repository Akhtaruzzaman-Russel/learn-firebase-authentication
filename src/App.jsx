import React from 'react'
import { Link } from 'react-router'
import Logout from './components/Logout'
import { AuthProvider } from './context/AuthContext'


const App = () => {
  return (
    <>
            <div className='p-5 container mx-auto'>
            
              <nav className='py-30 mt-15 bg-slate-100'>
                <ul className='flex items-center justify-center space-x-4'>
                  <li><Link to="/register" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-900'>Register</Link></li>
                  <li><Link to="/login" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-900'>Login</Link></li>
                  <li><Link to="/dashboard" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-900'>Dashboard</Link></li>
                  <li><Link to="/user-profile" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-900'>Profile</Link></li>
                  <li><Link to="/reset-password" className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-900'>Reset Password</Link></li>
                </ul>
              </nav>

              <Logout />
              
          </div>
    </>
  )
}

export default App 