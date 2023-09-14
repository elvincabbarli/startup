import React from 'react'
import './components.css'
import lightt from '../assets/light.svg'

const Fourth = () => {
    return (
        <section className="fourth">
            <div className="fourth-top">
                <div className="fourth-top-left">
                    <h1>Our core values</h1>
                </div>
                <div className="fourth-top-right">
                    <img src={lightt} alt="" />
                </div>
            </div>
            <div className="fourth-bottom">
                <div className="fourth-bottom-card">
                    <h1>01. Innovation</h1>
                    <p>Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.</p>
                </div>
                <div className="fourth-bottom-card">
                    <h1>02. People</h1>
                    <p>Talent is what enable us to create great companies.</p>
                </div>
            </div>
        </section>
    )
}

export default Fourth