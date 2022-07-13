import { NavLink, Link } from "react-router-dom";
import Messages from "./Messages";

function Nav() {

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
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
                        <NavLink to="/admin/comments" className="nav-link" style={({ isActive }) => // funkcija gauna argumentą isActive, jei true vienas stilus, false - kitas;
                        isActive ? {
                            color: 'crimson'
                        } : undefined
                        }>Comments</NavLink>
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </nav>
                </div>
            </div>
        </div>
        <Messages/>
        </>
    )
}

export default Nav;