import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            "&nbsp; | &nbsp;"
            <Link to="/orders/new">New Order</Link>
            <Link to="/notes">Notes</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}