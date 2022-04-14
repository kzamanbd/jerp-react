import React from 'react';

export default function BlankLayout({ children }) {
    return (
        <div id="master-layout" className="master-layout">
            {children}
        </div>
    );
}
