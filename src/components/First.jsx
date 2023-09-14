import React from 'react'
import firstt from '../assets/1.png'

const First = () => {
    return (
        <section className="first">
            <div className="first-left">
                <h1>We Create Startups.</h1>
                <p>We are startup studio that develops and launches new companies.</p>
                <button>See our works</button>
            </div>
            <div className="first-right">
                <img src={firstt} alt="" />
            </div>
        </section>
    )
}

export default First