import { NavLink } from "react-router-dom";

function Nav() {

    return (
        <>
        <nav className="nav">
            <NavLink to="/admin/" className="nav-link" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
              isActive ? {
                color: 'crimson'
              } : undefined
            }>Admin</NavLink>
            <NavLink to="/admin/cats" className="nav-link" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
              isActive ? {
                color: 'crimson'
              } : undefined
            }>Categories</NavLink>
            <NavLink to="/admin/products" className="nav-link" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
              isActive ? {
                color: 'crimson'
              } : undefined
            }>Products</NavLink>
        </nav>
        </>
    )
}

export default Nav;