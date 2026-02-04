import React from 'react';
import dynamic from 'next/dynamic';
import { FiPlay, FiSettings, FiTrendingUp } from 'react-icons/fi';

// Componente cliente carregado dinamicamente
const DynamicHowItWorksClient = dynamic(() => import('./HowItWorksClient'), {
    ssr: false,
    loading: () => <HowItWorksFallback />
});

// Fallback component renderizado no servidor para SEO
const HowItWorksFallback: React.FC = () => (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    How It Works
                </h2>
                <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
                    Get started in just three simple steps and watch your business transform
                </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Step 1 */}
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiPlay size={28} className="text-black" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        1
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                        Get Started
                    </h3>
                    <p className="text-foreground/60">
                        Sign up and tell us about your business goals and current challenges
                    </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiSettings size={28} className="text-black" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        2
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                        We Customize
                    </h3>
                    <p className="text-foreground/60">
                        Our team creates a tailored solution that fits your specific needs
                    </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiTrendingUp size={28} className="text-black" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        3
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                        Watch Growth
                    </h3>
                    <p className="text-foreground/60">
                        Launch your optimized website and see immediate results in leads and conversions
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
                <button className="bg-primary hover:bg-primary-accent text-black font-bold py-4 px-8 md:px-12 rounded-full text-lg md:text-xl transition-colors duration-300">
                    Start Your Journey
                </button>
            </div>
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

const HowItWorks: React.FC = () => {
    return <DynamicHowItWorksClient />;
};

export default HowItWorks;
