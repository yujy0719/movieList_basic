import React from "react";

const InputField = ({
    type,
    placeholder,
    value,
    onChange,
    errorMessage
}) => {
    return (
        <>
            <input
                type={type} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
            />
            <div style={{color:'red'}}>
                {errorMessage}
            </div>
        </>
    )
}

export default InputField;