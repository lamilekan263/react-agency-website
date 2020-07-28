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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Banner
