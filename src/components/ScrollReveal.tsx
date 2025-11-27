'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    width?: 'fit-content' | '100%';
    overflow?: 'hidden' | 'visible';
}

export function ScrollReveal({
    children,
    className,
    delay = 0.25,
    width = 'fit-content',
    overflow = 'hidden'
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow, height: '100%' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: delay }}
                className={className}
                style={{ height: '100%' }}
            >
                {children}
            </motion.div>
        </div>
    );
}
