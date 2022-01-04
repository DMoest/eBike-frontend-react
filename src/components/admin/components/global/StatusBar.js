import { useEffect, useState } from 'react'
import './StatusBar.css'

function StatusBar({ city }) {
    

    return (
        <div className="statusbar__outer-wrapper">
            <div className="statusbar__inner-wrapper">
                Stad: { city } 
            </div>
        </div>
    )
}

export default StatusBar
