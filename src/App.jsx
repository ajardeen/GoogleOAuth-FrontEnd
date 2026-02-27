import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { Toaster, sileo } from "sileo";

import GoogleSignIn from "./components/GoogleSignIn";
import OneTapGoogleLogin from "./components/OneTapGoogleLogin";
import GoogleSignOut from "./components/GoogleSignOut";
import "./App.css";

function App() {
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const [user, setUser] = useState(null);

  

  const handleLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      setUser(decoded);

      sileo.success({
        title: "Signed in",
        description: decoded.email,
      });
    } catch {
      sileo.error({ title: "Token Decode Failed" });
    }
  };

  const handleLoginError = () => {
    sileo.error({ title: "Google Login Failed" });
  };

  const handleLogout = () => {
    setUser(null);
    sileo.info({ title: "Logged out" });
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Toaster position="top-right"  />

      <div className="app-container">
        {!user ? (
          <div className="auth-card">
            <h1 className="app-title">Google OAuth</h1>
            <p className="app-subtitle">Secure authentication</p>

            <div className="auth-actions">
              <GoogleSignIn
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />
                
              <OneTapGoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />
              <p className="description">

              one tap login used onn second button so pop up will appear on page load
              </p>
            </div>
          </div>
        ) : (
          <div className="profile-card">
            {user.picture && (
              <img
                src={user.picture}
                alt="Profile"
                className="profile-avatar"
              />
            )}


            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>

            <div className="profile-meta">
              <div>
                <span>Verified</span>
                <strong>{user.email_verified ? "Yes" : "No"}</strong>
              </div>
              <div>
                <span>Expires</span>
                <strong>
                  {new Date(user.exp * 1000).toLocaleTimeString()}
                </strong>
              </div>
            </div>

            <GoogleSignOut onLogout={handleLogout} />
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;