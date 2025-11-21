import React from 'react';

const Layout = ({ children }) => {
    return (
        <main className="flex-1 min-h-screen bg-cream p-4 lg:p-8 pt-20 lg:pt-8 transition-all duration-300">
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </main>
    );
};

export default Layout;
