import React from 'react'
import LeftFold from './left-fold'
import RightFold from './right-fold'
import "./calls.css"

function Calls() {
    return (
        <>
            <div className='calls-leftFold'>
                <LeftFold />
            </div>
            <div className='calls-rightFold'>
                <RightFold />
            </div>
        </>
    )
}

export default Calls