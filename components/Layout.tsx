import React from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <nav>
                <Link href="/"></Link>
                <Link href="/clara/"></Link>
                {/*<Link href="/about">About</Link>*/}
            </nav>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
