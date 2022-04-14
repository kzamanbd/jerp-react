import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBarMenu from './SideBarMenu';

export default function AppLayout({ children }) {
    return (
        <div id="master-layout" className="master-layout">
            <Header />
            <SideBarMenu />
            <main id="main-section" className="main-section">
                {children}
            </main>
            <Footer />
        </div>
    );
}
