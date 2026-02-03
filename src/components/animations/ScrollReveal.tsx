import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, delay = 0, width = "fit-content" }: ScrollRevealProps) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </div>
    );
};
