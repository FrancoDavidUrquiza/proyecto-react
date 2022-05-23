import React  from 'react'
import { spinnerStyle } from '../Spinner/spinnerSytle.js'

const Spinner = () => {

    return (
        <>
        {
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status' style={spinnerStyle}></div>
            </div>
        }
        </>
    )
}

export default Spinner