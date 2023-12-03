import React from 'react'
import "./sidebar-option.css"

function sidebarOption({ option, isActive }) {
    const classList = isActive ? "sidebar-option active" : "sidebar-option";
    return (
        <div className={classList} >
            <div className='sidebar-option-icon'>{option.icon}</div>
            {option.name && <label className='sidebar-option-label'>{option.name}</label>}
        </div>
    )
}

export default sidebarOption