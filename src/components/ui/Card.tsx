import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
