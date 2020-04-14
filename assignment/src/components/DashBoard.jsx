import React from 'react'
import { connect } from "react-redux"
import {getData} from "../redux/action"

class DashBoard extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount=()=>{
        this.props.getData()
    }
    render() {
        return (
            <React.Fragment>
                <div>hello</div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
return({
    getData:()=>dispatch(getData())
})
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)