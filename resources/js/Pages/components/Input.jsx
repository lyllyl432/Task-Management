import React from "react";

const Input = ({ ...props }) => {
    return (
        <input
            {...props}
            className="w-full p-4 border border-gray-200 rounded-md text-sm bg-white placeholder:text-xs md:placeholder:text-sm md:text-sm"
        />
    );
};

export default Input;
