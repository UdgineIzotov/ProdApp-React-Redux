import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'

import './Header.styl';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.routes = [
            {
            link: "/settings",
            content: "SettingsPage"
            },
            {
                link: "/task-list",
                content: "SettingsPage"
            }
        ]
    }
    render() {
        return (
            <header>
                <Link to="/task-list">task</Link>
                <Link to="/settings">settings</Link>
            </header>
            )
    }
}

export default HeaderComponent;