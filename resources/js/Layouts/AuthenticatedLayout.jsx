import React from "react";

import AdminNavbar from "../Components/Navbars/AdminNavbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import HeaderStats from "../Components/Headers/HeaderStats";

export const AuthenticatedLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {children}
                </div>
            </div>
        </>
    );
};
