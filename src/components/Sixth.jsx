import React from 'react'
import './components.css'
import leftt from '../assets/left-thumb.svg'
import rightt from '../assets/right-thumb.svg'

const Sixth = () => {
    return (
        <section className="third">
            <div className="third-inner">
                <img className='left-img' src={leftt} alt="" />
                <p>Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.</p>
                <img className='right-img' src={rightt} alt="" />
            </div>
        </section>
    )
}

export default Sixth