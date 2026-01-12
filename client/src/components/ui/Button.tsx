import React from "react";

interface buttonProps {
    children: React.ReactNode;
    onClick?(): void;
    type: 'button' | 'submit';
    className?: string;
    disabled: boolean; 
}

function Button({ children, onClick, className, disabled = false, type = 'button' }: buttonProps) {
    return (
        <button 
            className={`btn ${className} ${disabled ? 'btn-secondary' : 'btn-primary'}`} 
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;