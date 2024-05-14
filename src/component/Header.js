import { Link } from 'react-router-dom';
import "./style.css"
function Header() {
    return(
        <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favlist">favlist</Link>
        </nav>

        </>
    )
}

export default Header;