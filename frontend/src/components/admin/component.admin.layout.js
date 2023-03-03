import {NavLink, Outlet } from "react-router-dom"

function AdminLayout(){
    return (
        <>
        <nav className={"navbar navbar-expand-sm bg-dark"}>
            <ul className={"navbar-nav"}>
                <li className={"nav-item"}><NavLink className={"nav-link text-white"} to={"/admin/books"}>Books</NavLink></li>
                <li className={"nav-item"}><NavLink className={"nav-link"} to={"/"}>Client</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}
export default AdminLayout