import React from "react";

interface buttonProps {
    children: React.ReactNode;
    onClick?(): void;
    type: 'button' | 'submit';
    className?: string;
}

function Button({ children, onClick, className, type = 'button' }: buttonProps) {
    return (
        <button 
            className={`btn btn-primary ${className}`} 
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;