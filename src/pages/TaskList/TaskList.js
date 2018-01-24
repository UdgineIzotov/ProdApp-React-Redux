import React, { Component } from 'react'
import './TaskList.styl'

import HeaderComponent from '../../components/Header/Header'

class TaskListPage extends Component{

    render() {

        return <div>
                <HeaderComponent />
                <h1>TaskList</h1>
            </div>
    }
}

export default TaskListPage