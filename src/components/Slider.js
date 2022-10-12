import React from 'react'

export default function Slider() {
    return (
        <div className='slider'>
            <div className='slider-text'>
                <div className='t1'>
                    <p className='text'>Hello</p>
                    <p className='text-1'>. I'm</p>
                </div>
                <p className='text-2'>Yasin AKYAR</p>
                <p className='text-3'>Web Developer And UI Designer</p>
                <p className='text-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem soluta doloremque officia alias commodi quia dolores quibusdam saepe illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure provident, beatae quia tempora architecto voluptate impedit at numquam nulla culpa?</p>
            </div>
            <div className='slider-btn'>Let's Talk</div>
            <div className='slider-my'>
                <p className='text-4'>Chech Out My</p>
                <div className='links'>
                    <a href="https://github.com/ysnkyrr" target="_blank"><img className='icons' src="/github-icon.svg" alt="" /></a>
                    <a href="https://www.linkedin.com/in/yasin-akyar-58572a180/" target="_blank"><img className='icons' src="/linkedin-logo.svg" alt="" /></a>
                </div>
            </div>
        </div>
    )
}
