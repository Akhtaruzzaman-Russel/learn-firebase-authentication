import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import app from '../firebase/firebase.config'
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

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

  // Google Login Functionality

  const handleGoogleLogin = ()=>{
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {

              const user = result.user;
              console.log("Google Login Success", user)
              navigate('/')

        }).catch((error) => {
            console.error("Google Login Faild", error)
        });

    // console.log("Google Login Button Clicked")
  }

  // Facebook Login Functionality
  const handleFacebookLogin = ()=>{
    const provider = new FacebookAuthProvider();

        signInWithPopup(auth, provider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;

            console.log("Favebook Login Successful", user)
            navigate('/')

          })
          .catch((error) => {
              console.log("Facebook Login Error" + error)
          });


    console.log("Facebook Button Clicked")
  }

  // GitHub Login Functionality
  const handleGithubLogin = ()=>{

    const githubProvider = new GithubAuthProvider();

        signInWithPopup(auth, githubProvider)
          .then((result) => {


            // The signed-in user info.
            const user = result.user;

            console.log("GitHub Login Successful", user)
            navigate('/')

          }).catch((error) => {

            console.error("Fail lologin with GitHub", error)

          });

    console.log("GitHub Button Clicked")
  }


  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>

        <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-center text-gray-800'>Login here</h2>

              {/* Login Form */}
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

            {/* Social Login Details */}
            <div className='text-center space-y-4'>
              <p className='text-gray-600'>Or Login with</p>
              <div className='flex justify-center space-x-4'>

                <button onClick={handleGoogleLogin} className=' flex items-center px-4 py-2 space-x-2 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer'> <FaGoogle /> <span>Google</span> </button>

                <button onClick={handleFacebookLogin} className='flex items-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer'> <FaFacebook /> <span> Facebook </span> </button>

                <button onClick={handleGithubLogin} className='flex items-center px-4 py-2 space-x-2 bg-gray-900 text-white rounded hover:bg-gray-700 cursor-pointer'> <FaGithub /> <span> GitHub </span> </button>
              </div>
            </div>
              
              {/* Below Login button text */}
            <p className='text-sm text-center text-gray-600'>Don't have a account? Please <Link to="/register" className='text-blue-600 hover:underline font-medium'> Sign Up</Link> </p>
        </div>
        
        

    </div>
  )
}

export default Login 