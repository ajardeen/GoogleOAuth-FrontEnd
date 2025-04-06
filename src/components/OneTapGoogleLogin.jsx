import React from "react";
import { GoogleLogin } from '@react-oauth/google';
function OneTapGoogleLogin() {
  return (
    <div>
      OneTapGoogleLogin
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
      ;
    </div>
  );
}

export default OneTapGoogleLogin;
