import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleSignIn = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6">
      <h1 className="text-3xl font-semibold text-gray-300 mb-4 ">OAuth 2.0</h1>
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        
      </div>
    </div>
  );
};

export default GoogleSignIn;
