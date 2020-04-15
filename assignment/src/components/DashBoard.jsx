import React from 'react'
import { connect } from "react-redux"
import { getData } from "../redux/action"

class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getValues: 1
        }
    }
    componentDidMount = () => {
        alert(this.state.getValues)
        if (this.state.getValues) {
            this.props.getData()
            this.setState({
                getValues: 0
            })
            alert(this.state.getValues)
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 className="mx-auto my-auto">UTILIZE APP</h1>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return ({
        getData: () => dispatch(getData())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)