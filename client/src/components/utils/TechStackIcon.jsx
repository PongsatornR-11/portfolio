import React from 'react'
import StackIcon from "tech-stack-icons";


const TechStackIcon = ({ name, variant = 'light', size = 27 }) => {
    // variant ="light" | "dark" | "grayscale"
    return (
        <div style={{ width: size, height: size }}>
            <StackIcon name={name} variant={variant} />
        </div>
    )
}

export default TechStackIcon