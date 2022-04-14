import React from 'react';

export default function AppLayout({ children }) {
    return (
        <div id="master-layout" className="master-layout">
            {children}
        </div>
    );
}
