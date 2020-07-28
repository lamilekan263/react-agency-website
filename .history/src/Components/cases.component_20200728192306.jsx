import React from 'react';
import {ReactComponent as CasesNext} from '../assets/arrow-right.svg'
import {ReactComponent as CasesPrev} from '../assets/arrow-left.svg'

const Cases = () =>{
    return(
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled ">

                    </div>
                    <div className="cases-arrow next">
                        <CasesNext
                    </div>
                </div>
            </div>

        </section>
    )
}


export default Cases