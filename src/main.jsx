import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import PrivateRoute from './routers/PrivateRoute.jsx';
import Blogs from './components/Blogs.jsx';
import UserProfile from './components/UserProfile.jsx';
import UpdateProfile from './components/UpdateProfile.jsx';
import UpdatePassword from './components/UpdatePassword.jsx';
import SendPasswordResetMail from './components/SendPasswordResetMail.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute> } />
          <Route path="/blogs" element={<PrivateRoute> <Blogs /> </PrivateRoute> } />
          <Route path="/user-profile" element={<PrivateRoute> <UserProfile /> </PrivateRoute> } />
          <Route path="/update-profile" element={<PrivateRoute> <UpdateProfile /> </PrivateRoute> } />
          <Route path="/reset-password" element={<PrivateRoute> <UpdatePassword /> </PrivateRoute> } />
          <Route path="/send-reset-password-email" element={<PrivateRoute> <SendPasswordResetMail /> </PrivateRoute> } />
        </Routes>
      </BrowserRouter>,
  </AuthProvider>
)
