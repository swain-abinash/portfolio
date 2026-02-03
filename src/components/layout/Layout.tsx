import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;
