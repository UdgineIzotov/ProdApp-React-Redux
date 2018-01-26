import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

import './Header.scss';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <h1 className="logo">
                    <Link to="/" title="logo">
                        <img src="/Logo.svg" width="100%" height="100%" alt="logo-image" />
                    </Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a className="add-items" id="add-items" href="#" title="Add items">
                                <span className="icon--add"></span>
                            </a>
                        </li>
                        <li>
                            <a className="delete-items" id="delete-items" href="#" title="Delete item">
                                <span className="icon--trash"></span>
                                <span className="delete-count">0</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/task-list" className="global-list-nav" href="#task-list" title="To global list">
                                <span className="icon--list"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/statistics" className="statistics-nav {{statistics}}" href="#statistics" title="To Statistics">
                                <span className="icon--statistics"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings" className="settings-nav {{settings}}" href="#settings" title="To settings">
                                <span className="icon--settings"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>)
    }
    }

    export default HeaderComponent;