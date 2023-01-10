import { Link } from "react-router-dom"
import { NavItem } from "./NavItem"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand active" to='/'>useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavItem name='Home' />
                </li>
                <li className="nav-item">
                    <NavItem path='login' name='Login' />
                </li>
                <li className="nav-item">
                    <NavItem path='contact' name='Contact' />
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href='/'>Home via anchor</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}
