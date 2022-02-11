import React from 'react'
import './input.css'
export default function Input({ id, onChange, value, type, placeholder, background }) {
    return (
        <input
            name={id}

            value={value}
            onChange={(e) => onChange(e)}
            type={type}
            placeholder={placeholder}

            style={{ background: background }}
        />
    )
}
