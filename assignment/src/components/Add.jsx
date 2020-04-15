import React from "react"
import { add } from "../redux/action"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            customer_name: "",
            customer_email: "",
            product: "",
            quantity: 0,
        }
    }
    // setting the state values
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // adding a new order
    handleClick = () => {
        let order = this.state
        let newOrder = { "id": order.id, "customer_name": order.customer_name, "product": order.product, "customer_email": order.customer_email, "quantity": order.quantity }
        this.props.add(newOrder)
        alert(" New order has been added successfully !!")
    }
    render() {
        return (
            <React.Fragment>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Add A Order</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body ">
                                <div className="d-flex justify-content-center">
                                    <div className="mx-auto">
                                        <form>
                                            <div>Order id</div><br></br>
                                            <input type="text" name="id" onChange={this.handleChange} required /><br></br>
                                            <div>Product</div><br></br>
                                            <input type="text" name="product" onChange={this.handleChange} required /><br></br>
                                            <div>Email</div><br></br>
                                            <input type="text" name="customer_email" onChange={this.handleChange} /><br></br>
                                            <div>Name</div><br></br>
                                            <input type="text" name="customer_name" onChange={this.handleChange} /><br></br>
                                            <div>Quantity</div><br></br>
                                            <input type="text" name="quantity" onChange={this.handleChange} /><br></br>
                                            <button type="reset" className="btn btn-info mx-auto mt-3">Reset</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.handleClick}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return ({
        add: (payload) => dispatch(add(payload)),
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Add)

