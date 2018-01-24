/**
 * Created by Evhenii_Izotov on 1/24/2018.
 */
import React from 'react'
import { Switch, Route} from 'react-router-dom'

import TaskListPage from '../pages/TaskList/TaskList'
import NotFoundPage from '../pages/NotFound/NotFound'
import SettingsPage from '../pages/Settings/Settings'

const routes = [
    {
        path: '/task-list',
        component: TaskListPage
    },
    {
        path: '/settings',
        component: SettingsPage
    }
]

const defaultRoute = {
    path: '/',
    component: TaskListPage
}

const notFoundRoute = { component: NotFoundPage}



export const getRoutes = () => (
    <Switch>
        {routes.map( (route, key) =>  (<Route key={key} path={route.path} component={route.component}/>) )}
        <Route exact path={defaultRoute.path} component={defaultRoute.component}/>
        <Route component={notFoundRoute.component}/>
    </Switch>
);