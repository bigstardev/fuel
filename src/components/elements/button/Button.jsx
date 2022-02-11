import React from 'react'
import './button.css'
export default function Button({ content, type, onClick }) {

    return (
        <button className={"btn " + (type === "add" ? "add" : "save")} onClick={onClick}>
            {content}
        </button>
    )
}
