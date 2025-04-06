import React from 'react'
import './App.css'
import GoogleSignIn from './components/GoogleSignIn'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleSignOut from './components/GoogleSignOut';
import OneTapGoogleLogin from './components/OneTapGoogleLogin';


function App() {
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
  
  return (
   <>
   <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>

   <GoogleSignIn/>
   <OneTapGoogleLogin/>
   <GoogleSignOut/>
   </GoogleOAuthProvider>
   </>
  )
}

export default App;
