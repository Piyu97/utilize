import React from 'react'
import { connect } from "react-redux"
import { getData } from "../redux/action"

class DashBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount =  () => {
        let {prod,getData}=this.props
        if (prod == null) {
            getData()
        }
    }
    render() {
        return (
            <React.Fragment>
                    <button className="btn btn-secondary m-3" onClick={()=>this.props.history.goBack()}>GO BACK</button>
                    <h1 className="text-center my-auto">ASSIGNMENT</h1>
                    <h5 className="text-center  my-4">Click on the home Button</h5>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    prod: state.database
})

const mapDispatchToProps = dispatch => {
    return ({
        getData: () => dispatch(getData())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)