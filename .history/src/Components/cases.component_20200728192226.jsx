import React from 'react';
import {ReactComponent as CaseNext} from '../assets/arrow-right.svg'
import {ReactComponent as CasePrev} from '../assets/arrow-left.svg'

const Cases = () =>{
    return(
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled ">

                    </div>
                    <div className="cases-arrow next">
                        
                    </div>
                </div>
            </div>

        </section>
    )
}


export default Cases