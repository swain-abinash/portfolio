import React from 'react';

interface TagProps {
    children: React.ReactNode;
    className?: string;
}

const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
    return (
        <span className={`px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20 ${className}`}>
            {children}
        </span>
    );
};

export default Tag;
