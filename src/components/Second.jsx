import React from 'react'
import './components.css'
import questionn from '../assets/question.svg'

const Second = () => {
  return (
    <section className="second">
    <div className="second-top">
      <div className="second-top-left">
        <h1>Who we are</h1>
        <p>
          We create products that have innovation and technology at their
          core. We value working with talented people that understand the
          possibilities of today.
        </p>
      </div>
      <div className="second-top-right">
        <img src={questionn} alt="" />
      </div>
    </div>
    <div className="second-bottom">
      <div className="second-bottom-card">
        <h1>01</h1>
        <p>We develop innovative products, systems and services</p>
      </div>
      <div className="second-bottom-card">
        <h1>02</h1>
        <p>Next we build teams to scale them into companies</p>
      </div>
      <div className="second-bottom-card">
        <h1>03</h1>
        <p>Each startup solving one problem at a time</p>
      </div>
    </div>
  </section>
  )
}

export default Second