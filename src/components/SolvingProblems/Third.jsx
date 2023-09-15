import React from 'react'
import leftt from '../../assets/left-thumb.svg'
import rightt from '../../assets/right-thumb.svg'
import './Problems.css'

const Third = () => {
    return (
        <section className="third">
            <div className="third-inner">
                <img className='left-img' src={leftt} alt="" />
                <p>We love solving problems!</p>
                <img className='right-img' src={rightt} alt="" />
            </div>
        </section>
    )
}

export default Third