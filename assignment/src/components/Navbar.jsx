import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

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
                    <h6 style={{ "color": "white" }}><Link to="/trial" style={{ "color": "white", "textDecoration": "none" }}><span class=" lead">UTILIZE</span></Link></h6>
                    <div>
                        {this.props.token && <button class="btn btn-outline-danger ml-2" onClick={this.Logout} style={{"color":"white"}}>Logout</button>}
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar