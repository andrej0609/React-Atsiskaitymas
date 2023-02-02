import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import WebLogo from "../Menu/WebLogo";
import { Outlet } from "react-router-dom";

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigation('/');
  }

  return (
    <>
      <div className="UserInfo">
        <div>
          <WebLogo />
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/newPost">Add new post</Link>
          <Link to="/user">
            <img
              src={loggedInUser.avatar}
              alt="user avatar"
            />
            <span className="Username">{loggedInUser.userName}</span>
            <span className="Role">{loggedInUser.level}</span>
          </Link>
          <button onClick={() => logOutUser()}>LogOut</button>
        </div>
      </div>
      <hr className='line' />
      <Outlet />
    </>
  );
}

export default UserInfo;