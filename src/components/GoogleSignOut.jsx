import React from "react";
import { googleLogout } from "@react-oauth/google";

function GoogleSignOut() {
 

  const handleLogout = () => {
    googleLogout();
    console.log('Logged out successfully');
  };

  return (
    <button onClick={handleLogout}>
      Sign Out
    </button>
  );
}

export default GoogleSignOut;