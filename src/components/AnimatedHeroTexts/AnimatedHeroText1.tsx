'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedHeroText1: React.FC = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('More Clients'); // Inicializa com primeira palavra para SEO
    const [isDeleting, setIsDeleting] = useState(false);
    const [isClient, setIsClient] = useState(false);
    
    const words = ['More Clients', 'Show Your Products', 'Better Leads'];
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    useEffect(() => {
        if (!isClient) return; // Não anima no servidor
        
        const currentWord = words[currentWordIndex];
        
        const timeout = setTimeout(() => {
            if (isDeleting) {
                // Apagando letra por letra
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                // Escrevendo letra por letra
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                
                if (displayText.length === currentWord.length) {
                    // Pausa antes de começar a apagar
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }
        }, isDeleting ? 100 : 150); // Velocidade da animação
        
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentWordIndex, words, isClient]);

    return (
        <div className="text-left mt-32 mx-20">
            {/* SEO: Conteúdo escondido para crawlers */}
            <div className="sr-only">
                <h1>Your Website - More Clients, Show Your Products, Better Leads</h1>
                <p>Transform your digital presence with stunning designs that convert visitors into loyal customers. Get more clients, showcase your products, and generate better leads with our professional web solutions.</p>
            </div>
            
            {/* Texto fixo */}
            <motion.h1
                className="text-4xl md:text-6xl lg:text-9xl font-bold text-white mb-4"
                initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                role="heading"
                aria-level={1}
            >
                Your Website
            </motion.h1>
            
            {/* Texto animado */}
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-start mx-2">
                <motion.h2
                    className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary"
                    initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    role="heading"
                    aria-level={2}
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <span className="relative">
                        {displayText}
                        {isClient && (
                            <motion.span
                                className="inline-block w-1 h-8 md:h-12 lg:h-14 bg-primary ml-1"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                                aria-hidden="true"
                            />
                        )}
                    </span>
                </motion.h2>
            </div>
            
            {/* Subtitle */}
            <motion.p
                className="text-lg md:text-xl text-white/60 mt-6 max-w-2xl mx-auto text-center pt-20"
                initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                role="text"
            >
                Transform your digital presence with stunning designs that convert visitors into loyal customers.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
                className="flex justify-center mt-12"
                initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            >
                <motion.button
                    className="bg-primary hover:bg-primary-accent text-black font-bold py-4 px-8 md:px-12 rounded-full text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        // Scroll para seção ou ação desejada
                        const ctaSection = document.getElementById('cta');
                        if (ctaSection) {
                            ctaSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    Get Started Today
                </motion.button>
            </motion.div>
            
            {/* Schema.org Structured Data - SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Your Website",
                        "description": "Transform your digital presence with stunning designs that convert visitors into loyal customers. Get more clients, showcase your products, and generate better leads.",
                        "url": typeof window !== 'undefined' ? window.location.origin : '',
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": typeof window !== 'undefined' ? `${window.location.origin}/search?q={search_term_string}` : '',
                            "query-input": "required name=search_term_string"
                        },
                        "mainEntity": {
                            "@type": "Service",
                            "name": "Web Design Services",
                            "description": "Professional web design services to get more clients, showcase products, and generate better leads",
                            "serviceType": ["Web Design", "Digital Marketing", "Lead Generation"]
                        }
                    })
                }}
            />
        </div>
    );
};

export default AnimatedHeroText1;
