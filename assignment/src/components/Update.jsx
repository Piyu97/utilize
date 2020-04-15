import React from 'react'
import { connect } from "react-redux"
import {update} from "../redux/action"

class Update extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: "",
            customer_name: "",
            customer_email: "",
            quantity: 0,
            id:0
        }
    }
    // function to set the state values
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // function dealing with update
    handleUpdate=(e)=>{
        e.preventDefault()
        let changedValues=this.state
        this.props.update(changedValues)
        alert("It's Updated !!")
        this.props.history.goBack()
    }

    // function to set the state initial values
    componentDidMount = () => {
        var temp = this.props.prod.find((item) => (item.id).toString() == (this.props.match.params.id).toString())
        this.setState({
            product: temp.product,
            customer_email: temp.customer_email,
            customer_name: temp.customer_name,
            quantity: temp.quantity,
            id:temp.id
        })
    }
    render() {
        var item  = this.state
        return (
            <React.Fragment>
                <div className="d-flex justify-conetnt-center ">
                    <div className="mx-auto mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="text-center">Update</div>
                        <form>
                            <div className="clearfix my-4">
                                <div className="float-left">Product Name</div>
                                <div className="float-right ml-3"><input type="text" name="product" value={item.product} onChange={this.handleChange}></input></div>
                            </div>
                            <div className="clearfix my-4">
                                <div className="float-left">Customer Email</div>
                                <div className="float-right ml-3"><input type="text" name="customer_email" value={item.customer_email} onChange={this.handleChange}></input></div>
                            </div>
                            <div className="clearfix my-4">
                                <div className="float-left">Quantity</div>
                                <div className="float-right ml-3"><input type="text" name="quantity" value={item.quantity} onChange={this.handleChange}></input></div>
                            </div>
                            <div className="clearfix my-4">
                                <div className="float-left">Customer name</div>
                                <div className="float-right ml-3"><input type="text" name="customer_name" value={item.customer_name} onChange={this.handleChange}></input></div>
                            </div>
                        </form>
                    <div className="d-flex justify-content-center"><button className="btn btn-warning text-white" onClick={this.handleUpdate}>Update</button></div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    prod: state.secondaryData
})

const mapDispatchToProps = dispatch=>{
return({
    update:(payload)=>dispatch(update(payload))
})
}

export default connect(mapStateToProps, mapDispatchToProps)(Update)