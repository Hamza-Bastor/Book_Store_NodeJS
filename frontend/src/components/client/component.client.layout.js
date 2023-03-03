import {NavLink, Outlet } from "react-router-dom"

function ClientLayout(){
    return (
        <>
        <nav className={"navbar navbar-expand-sm navbar-light bg-light"}>
            <ul className={"navbar-nav"}>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/"}>Home</NavLink></li>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/books"}>Books</NavLink></li>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/admin/books"}>Admin</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
        <h1 className="text-center">Welcome</h1>
        </>
        
    )
}
export default ClientLayout