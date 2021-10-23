import { useState } from 'react'
import logo from './logo.svg'

import Profile from './pages/Profile'
import Course from './pages/Course'
import ApplyProject from './pages/ApplyProject'
import Dashboard from './pages/Dashboard';
import FormPengajuan from './pages/FormPengajuan'
import { Switch, Route, Link } from "react-router-dom";
import Project from './pages/Project'


function App() {

  return (
    <div>
    <Switch>
                <Route exact path={["/", "/home"]} component={Dashboard} />
                <Route exact path="/apply_project" component={ApplyProject} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/submit_project" component={FormPengajuan} />
                <Route path="/projects/:id" component={Project} />
    </Switch>
    </div>
  )
}

export default App
