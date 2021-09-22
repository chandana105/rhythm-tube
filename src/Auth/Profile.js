import Navbar from "../Components/Nav";
import { useAuth } from "../Contexts/AuthProvider";

const Profile = () => {
  const {
    logoutHandler,
    user: { username, email },
  } = useAuth();
  return (
    <div className="container profile-container" id="empty-container-box">
      <Navbar />
      <div className="content">
        <main>
          <div className="empty-container-card">
            <h3>User Credentials</h3>
            <p>
              Username : <b>{username}</b>
            </p>
            <p>
              Email : <b> {email} </b>{" "}
            </p>
            <button className="btn btn-primary" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
