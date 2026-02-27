import { GoogleLogin } from "@react-oauth/google";

const GoogleSignIn = ({ onSuccess, onError }) => {
  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onError}
      
    />
  );
};

export default GoogleSignIn;