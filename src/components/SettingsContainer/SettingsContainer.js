/**
 * Created by Evhenii_Izotov on 1/26/2018.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'

import SettingsInputComponent from '../SettingsInput/SettingsInput'


@connect ( (store) => {
    return {
        settings: store.settings
    }
})
class SettingsContainerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="settings-container">
                <SettingsInputComponent name={"work time"}
                                        value={this.props.settings.workTime}
                                        minValue={15}
                                        maxValue={25}
                                        increaseAction={this.incWorkTime}
                                        decreaseAction={this.decWorkTime}
                />
               <SettingsInputComponent name={"work iterations"}
                                       value={this.props.settings.workIterations}
                                       minValue={2}
                                       maxValue={5}
                                       increaseAction={this.incWorkIterations}
                                       decreaseAction={this.decWorkIterations}
               />
                <SettingsInputComponent name={"short break"}
                                        value={this.props.settings.shortBreak}
                                        minValue={3}
                                        maxValue={5}
                                        increaseAction={this.incShortBreack}
                                        decreaseAction={this.decShortBreack}
                />
                <SettingsInputComponent name={"long break"}
                                        value={this.props.settings.longBreak}
                                        minValue={15}
                                        maxValue={30}
                                        increaseAction={this.incLongBreack}
                                        decreaseAction={this.decLongBreack}

                />
            </div>);
    }
}

export default SettingsContainerComponent