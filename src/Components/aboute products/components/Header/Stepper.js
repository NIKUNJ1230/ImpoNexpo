import React from "react";

const Stepper=()=>{

    const data=[{
        step: 'A',
        title: 'Search the <br /> Product',
    }, {
        step: 'B',
        title: 'View the Product <br /> & Communicate <br /> with the Exporter',
    }, {
        step: 'C',
        title: 'View Your <br /> Ordering  list',
    }, {
        step: 'D',
        title: 'Make your <br /> Importation <br /> Swift',
    }, {
        step: 'E',
        title: 'Pay for your <br /> Product',
    }, {
        step: 'F',
        title: 'Confirmation <br /> of Payment',
    }];

    return <div className={'text-center'}>
        <div>
            <div className="stepper-header">
                Sourcing, Ordering and Receiving Your Product is <br/> as Simple as A, B, C, D, E and F
            </div>
            <div className="d-flex justify-content-around position-relative stepper-block">
                <div className="stepper-line" />
                {data.map(({step, title})=>{
                    return <div className="step-box">
                        <span className={`step-dot ${step === 'A' ? 'active' : ''}`}>{step}</span>
                        <div className="step-title mt-3" dangerouslySetInnerHTML={{__html: title}} />
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default Stepper;