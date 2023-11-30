import React from 'react';
import Header from './components/Header';
const Layout = ({ children }) => {
    return (
    <React.Fragment>
        
        <div className="navigationWrapper">
            <Header />
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;