/**
 * Created by Evhenii_Izotov on 1/26/2018.
 */
import React from 'react'

import './SettingsInput.scss'

const SettingsInput = ({name, value, minValue, maxValue}) => {

    return (
        <div className="settings-input-container">
            <h3 className="settings-caption">{caption.toUpperCase()}</h3>
            <div className="settings-input">
                <span className="settings-input-minus" onClick={decreaseAction}></span>
                <span className="settings-input-value">{value}</span>
                <span className="settings-input-plus" onClick={increaseAction}></span>
            </div>
            <h6 className="settings-note">
                Please select a value between {minValue} and {maxValue} <span className="time">minutes</span>
            </h6>
        </div>)
}

export default SettingsInput;
