import React from 'react'
import {ReactComponent as RightArrow} from '../assets/arrow-right.svg';

const Banner = () => {
    return(
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating unique brand is</span>
                        </div>
                        <div className="line">
                            <span>what we do</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">more about us</a>
                        <RightArrow className='svg'/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Banner
