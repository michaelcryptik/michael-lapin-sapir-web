import React from "react";
import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Categories from '../components/Categories';



function Layout() {
    return (
        <>
            <Header />
            <div className="App">
                <Categories />

                <Outlet />
            </div>

        </>
    )
}


export default Layout;