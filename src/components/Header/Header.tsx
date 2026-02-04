import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaFingerprint } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import Container from '../Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

// Componente cliente carregado dinamicamente
const DynamicHeaderClient = dynamic(() => import('./HeaderClient'), {
    ssr: false,
    loading: () => <HeaderFallback />
});

// Fallback component renderizado no servidor
const HeaderFallback: React.FC = () => (
    <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full bg-white/90 backdrop-blur-md shadow-md md:absolute">
        <Container className="!px-0">
            <nav className="mx-auto flex justify-between items-center py-3 px-5 md:py-4 md:my-0 bg-transparent">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <FaFingerprint className="text-foreground min-w-fit w-7 h-7" />
                    <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                        {siteDetails.siteName}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {menuItems.map(item => (
                        <li key={item.text}>
                            <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors">
                            Download
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button (estático) */}
                <div className="md:hidden flex items-center">
                    <button
                        type="button"
                        className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                        aria-controls="mobile-menu"
                        aria-expanded={false}
                    >
                        <HiBars3 className="h-6 w-6" aria-hidden="true" />
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
            </nav>
        </Container>
    </header>
);

const Header: React.FC = () => {
    return <DynamicHeaderClient />;
};

export default Header;
