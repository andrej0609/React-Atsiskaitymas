import UserInfo from '../User/UserInfo';
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import WebLogo from './WebLogo';

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      {
        loggedInUser ?
          <UserInfo /> :
          <div className="loginRegister">
            <WebLogo />
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
      }
      {
        loggedInUser ?
          <div className="addPost">
            <Link to='/newPost'>Add new post</Link>
          </div>
          :
          <div className='info'>
            <hr />
            <p>Pls login or register to add new post, or to see your posts</p>
          </div>


      }
    </>
  );
}

export default Header;