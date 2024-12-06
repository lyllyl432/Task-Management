import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <main className="max-w-7xl mx-auto p-8 md:flex md:min-h-screen md:items-center">
                {children}
            </main>
        </>
    );
};

export default Layout;
