import React from "react"
import { Switch, Route } from "react-router-dom"
import DashBoard from "../components/DashBoard"
import Navbar from "../components/Navbar"
import NotFound from "../components/NotFound"
import Login from "../components/Login"
import Update from "../components/Update"
import Home from "../components/Home"

function Routes() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/dashboard" render={(props) => <DashBoard {...props} />}></Route>
                <Route path="/login" render={(props) => <Login {...props} />}></Route>
                <Route path="/home" render={(props) => <Home {...props} />}></Route>
                <Route path="/update/:id" render={(props) => <Update {...props} />}></Route>
                <Route path component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default Routes