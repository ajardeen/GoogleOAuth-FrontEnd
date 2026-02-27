import { googleLogout } from "@react-oauth/google";

function GoogleSignOut({ onLogout }) {
  const handleLogout = () => {
    googleLogout();
    onLogout();
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
    >
      Sign Out
    </button>
  );
}

export default GoogleSignOut;