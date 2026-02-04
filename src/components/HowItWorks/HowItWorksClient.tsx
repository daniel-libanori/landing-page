'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiSettings, FiTrendingUp, FiArrowRight } from 'react-icons/fi';

const HowItWorksClient: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const steps = [
        {
            icon: <FiPlay size={28} className="text-black" />,
            number: 1,
            title: "Get Started",
            description: "Sign up and tell us about your business goals and current challenges"
        },
        {
            icon: <FiSettings size={28} className="text-black" />,
            number: 2,
            title: "We Customize",
            description: "Our team creates a tailored solution that fits your specific needs"
        },
        {
            icon: <FiTrendingUp size={28} className="text-black" />,
            number: 3,
            title: "Watch Growth",
            description: "Launch your optimized website and see immediate results in leads and conversions"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const stepVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.8
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 0.6
            }
        }
    };

    return (
        <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-0 px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={isClient ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                    whileInView={isClient ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
                        Get started in just three simple steps and watch your business transform
                    </p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                    initial={isClient ? "hidden" : "visible"}
                    whileInView={isClient ? "visible" : {}}
                    viewport={{ once: true }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="text-center relative"
                            variants={stepVariants}
                        >
                            {/* Connection Line (only between steps) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 transform translate-x-8">
                                    <motion.div
                                        className="h-full bg-primary"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
                                    />
                                </div>
                            )}
                            
                            {/* Icon Container */}
                            <motion.div
                                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                                variants={iconVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {step.icon}
                            </motion.div>

                            {/* Step Number */}
                            <motion.div
                                className="w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.2, type: "spring", bounce: 0.6 }}
                            >
                                {step.number}
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={isClient ? { opacity: 0 } : { opacity: 1 }}
                                whileInView={isClient ? { opacity: 1 } : {}}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                            >
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-foreground/60">
                                    {step.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="text-center"
                    initial={isClient ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                    whileInView={isClient ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <motion.button
                        className="bg-primary hover:bg-primary-accent text-black font-bold py-4 px-8 md:px-12 rounded-full text-lg md:text-xl transition-colors duration-300 group flex items-center justify-center mx-auto gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const ctaSection = document.getElementById('cta');
                            if (ctaSection) {
                                ctaSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Start Your Journey
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </motion.div>
            </div>

            {/* SEO: Hidden content for crawlers */}
            <div className="sr-only">
                <h2>How Our Process Works - 3 Simple Steps</h2>
                <ol>
                    <li>Step 1: Get Started - Sign up and share your business goals</li>
                    <li>Step 2: We Customize - Receive a tailored solution for your needs</li>
                    <li>Step 3: Watch Growth - Launch and see results in leads and conversions</li>
                </ol>
                <p>Transform your business with our proven 3-step process. Start your journey to more clients, better products showcase, and increased leads today.</p>
            </div>
        </section>
    );
};

export default HowItWorksClient;
