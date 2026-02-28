import { GoogleLogin } from "@react-oauth/google";

const GoogleSignIn = ({ onSuccess, onError }) => {
  return <GoogleLogin onSuccess={onSuccess} onError={onError} width={"100%"} />;
};

export default GoogleSignIn;
