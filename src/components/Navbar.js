import React from 'react'

export default function Navbar() {
    return (
        <div className='header'>
            <a href=""><img className='header-logo' src="/uo-logo-green.png" alt="" /></a>
            <div className='header-item'>Home</div>
            <div className='header-item'>About Me</div>
            <div className='header-item'>Contact Me</div>
        </div>
    )
}
