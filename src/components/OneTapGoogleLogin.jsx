import { GoogleLogin } from "@react-oauth/google";

function OneTapGoogleLogin({ onSuccess, onError }) {
  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onError}
      useOneTap
      text="One Tap"
    />
  );
}

export default OneTapGoogleLogin;