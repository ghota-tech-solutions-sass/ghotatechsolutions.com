'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === null) {
            setShowBanner(true);
        }
    }, []);

    const updateConsent = (granted: boolean) => {
        const newValue = granted ? 'granted' : 'denied';
        localStorage.setItem('cookie_consent', newValue);
        setShowBanner(false);

        // Update Google Consent Mode via gtag
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
            (window as any).gtag('consent', 'update', {
                'analytics_storage': newValue,
                'ad_storage': newValue,
                'ad_user_data': newValue,
                'ad_personalization': newValue,
            });
        }
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="glass border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl bg-slate-950/90 md:flex md:items-center md:justify-between gap-6">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold text-white mb-2">Nous respectons votre vie privée</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic.
                                    En cliquant sur "Accepter", vous consentez à notre utilisation des cookies.
                                    Consultez notre <a href="/politique-confidentialite" className="text-blue-400 hover:text-blue-300 underline">politique de confidentialité</a> pour en savoir plus.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                                <button
                                    onClick={() => updateConsent(false)}
                                    className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
                                >
                                    Refuser
                                </button>
                                <button
                                    onClick={() => updateConsent(true)}
                                    className="px-6 py-2.5 rounded-full text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg shadow-blue-500/25"
                                >
                                    Accepter
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
