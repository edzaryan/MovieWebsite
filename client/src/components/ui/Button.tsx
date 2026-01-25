import React from "react";

interface buttonProps {
    children: React.ReactNode;
    onClick?(): void;
    type?: 'button' | 'submit';
    className?: string;
    disabled?: boolean; 
}

function Button({ 
    onClick, 
    children, 
    type = 'button',
    disabled = false, 
    className = 'btn-primary', 
}: buttonProps) {
    return (
        <button 
            className={`btn ${className} ${disabled && 'btn-secondary'}`} 
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;