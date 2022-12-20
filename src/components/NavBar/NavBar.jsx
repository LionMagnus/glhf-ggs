import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className="flex-container">
      <Link className="flex-item" to="/">
        <button className="btn fourth">Home</button>
      </Link>
      <Link className="flex-item" to="/tournaments">
        <button className="btn fourth">Tournaments</button>
      </Link>
      <Link className="flex-item" to="/tournaments/new">
        <button className="btn fourth">Add Tournaments</button>
      </Link>
        <span>Welcome, {user.name}</span>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}