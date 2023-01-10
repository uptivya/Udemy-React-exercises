import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "./context/UserContext"

export const NavItem = ({path = '', name}) => {
    const usuari = useContext(UserContext);
    return (
        <NavLink to={`/${path}`} className={ ({isActive}) => `nav-link ${(isActive && 'active')}` }>{ name }</NavLink>
    )
}
