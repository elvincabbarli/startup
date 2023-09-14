import React from 'react'
import './components.css'
import leftt from '../assets/left-thumb.svg'
import rightt from '../assets/right-thumb.svg'

const Third = () => {
    return (
        <section className="third">
            <div className="third-inner">
                <img src={leftt} alt="" />
                <p>We love solving problems!</p>
                <img src={rightt} alt="" />
            </div>
        </section>
    )
}

export default Third