import React from 'react'
import tolq from '../assets/tolq.png'
import labs from '../assets/labs.png'
import code from '../assets/code.png'
import legal from '../assets/legal.png'

const Fifth = () => {
    return (
        <section className="fifth">
            <h1>Our works</h1>
            <div className="fifth-cards">
                <div className="fifth-card">
                    <h2 className='fifth-card-h2 fifth-1 '>Tolq</h2>
                    <p>Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.</p>
                    <img src={tolq} alt="" />
                    <button>More</button>
                </div>
                <div className="fifth-card">
                    <h2 className='fifth-card-h2 fifth-2 '>Feedback Labs</h2>
                    <p>Feedback Labs turns feedback into actionable insights for your team.</p>
                    <img src={labs} alt="" />
                    <button>More</button>
                </div>
                <div className="fifth-card">
                    <h2 className='fifth-card-h2 fifth-3 '>Codekeeper</h2>
                    <p>Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.</p>
                    <img src={code} alt="" />
                    <button>More</button>
                </div>
                <div className="fifth-card">
                    <h2 className='fifth-card-h2 fifth-4 '>LegalSite</h2>
                    <p>Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.</p>
                    <img src={legal} alt="" />
                    <button>More</button>
                </div>
            </div>
        </section>
    )
}

export default Fifth