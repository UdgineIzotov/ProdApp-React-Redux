import React, { Component } from 'react'

import HeaderComponent from '../../components/Header/Header'
import SettingsContainer from '../../components/SettingsContainer/SettingsContainer'
import { connect } from 'react-redux'

@connect ( (store) => {
    return {
        tabs: store.settingsPage.tabs,
        currentTab: store.settingsPage.currentTab
    }
})
class Settings extends Component {

    render() {
        return (
            <main>
                <HeaderComponent />
                <h1>Settings Page</h1>
                <SettingsContainer />

            </main>
        );
    }
}

export default Settings
