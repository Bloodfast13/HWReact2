import React from 'react'
import './style.module.css'

interface OwnProps {
    href: string
    name: string
}

const Button: React.FC <OwnProps> = (props) => {
    return <a className='Button' href={props.href}>{props.name}</a>
}

export default Button