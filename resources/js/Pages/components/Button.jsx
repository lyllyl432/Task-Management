import React from "react";

const Button = ({ children, classes = "", ...props }) => {
    return (
        <button
            className={`${classes} bg-blue-500 text-white rounded-md p-4`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
