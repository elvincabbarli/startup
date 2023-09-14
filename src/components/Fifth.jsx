import React from 'react'
import tolq from '../assets/tolq.png'

const Fifth = () => {
    return (
        <section className="fifth">
            <h1>Our works</h1>
            <div className="fifth-cards">
                <div className="fifth-card">
                    <h2>Tolq</h2>
                    <p>Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.</p>
                    <img src={tolq} alt="" />
                    <button>More</button>
                </div>
            </div>
        </section>
    )
}

export default Fifth