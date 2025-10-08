

import { Outlet } from "react-router-dom"
import { AdminNavbar } from "../admin/src/components/AdminNavbar/AdminNavbar"
import { Footer } from "./components/Footer/Footer"


export const AdminLayout = () => {
    return (
        <>
            <AdminNavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
