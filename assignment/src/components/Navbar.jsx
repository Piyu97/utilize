import React from 'react'
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <nav class="navbar navbar-dark bg-dark">
                    <div><button class="btn btn-outline-primary"><Link to="/home" style={{ "color": "white", "textDecoration": "none" }}><h6></h6>Home</Link></button></div>
                    <h6 style={{ "color": "white" }}><Link to="/login" style={{ "color": "white", "textDecoration": "none" }}><span class=" lead ">UTILIZE</span></Link></h6>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar