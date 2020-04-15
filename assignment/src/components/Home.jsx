import React from 'react'
import { connect } from "react-redux"
import { del, add, filtering, sorting } from "../redux/action"
import { Link } from "react-router-dom"
import Notification from "./Notification"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            customer_name: "",
            customer_email: "",
            product: "",
            quantity: 0,
            delete: 0,
            update: 0
        }
    }

    // function performing the delete operation
    handleDelete = (idx) => {
        var res = window.confirm("Are you sure, To delete the item");
        if (res != true) {
            alert("You have Canceled Delete operation")
        } else {
            this.props.del(idx)
            setTimeout(() => {
                this.setState({
                    delete: 1
                })
            }, 3000)
            this.setState({
                delete: 0
            })


        }
    }
    // setting the state values
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // function to handle filter
    handleProduct = (e) => {
        this.props.filtering(e.target.value)
    }
    // function to handle the sorting
    handleSort = (e) => {
        this.props.sorting(e.target.value)
        this.setState({
            update: !this.state.update
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
        const { loading, prod } = this.props
        return (
            <div>
                {
                    loading ? (
                        <React.Fragment >
                            <div class="d-flex justify-content-center mt-5">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </React.Fragment >
                    ) : (
                            <React.Fragment>

                                <h5 class="text-center my-2">Click on<button type="button" class="btn mx-1" data-toggle="modal" data-target="#exampleModalCenter">
                                    <i style={{ "font-size": "36px", "color": "red" }}>+</i>
                                </button> to add another Order</h5>
                                <div className="d-flex justify-content-center">
                                    <div className="mx-auto">
                                        <select onChange={this.handleProduct}>
                                            <option value="default">Filter by product</option>
                                            <option value="Product 1">Product 1</option>
                                            <option value="Product 2">Product 2</option>
                                            <option value="Product 3">Product 3</option>
                                        </select>
                                        <select onChange={this.handleSort} className="mx-2">
                                            <option value="default">Sort by name</option>
                                            <option value="asc">A->Z</option>
                                            <option value="desc">Z->A</option>
                                        </select>
                                    </div></div>
                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Add A Order</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body ">
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
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-success" data-dismiss="modal" onClick={this.handleClick}>Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive mt-5">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead className="bg-dark text-white">
                                            <tr>
                                                <td>SI.NO</td>
                                                <td>Customer_email</td>
                                                <td>Customer_Name</td>
                                                <td>Product</td>
                                                <td>Quantity</td>
                                                <td>Update</td>
                                                <td>Delete</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {prod && prod.map((item, idx) =>
                                                <tr key={item.id}>
                                                    <td>{idx}</td>
                                                    <td>{item.customer_email}</td>
                                                    <td>{item.customer_name}</td>
                                                    <td>{item.product}</td>
                                                    <td>{item.quantity}</td>
                                                    <td><button className="btn btn-warning"><Link to={`/update/${item.id}`}>Update</Link></button></td>
                                                    <td><button className="btn btn-danger text-white" onClick={() => this.handleDelete(item.id)}>Delete</button></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                {this.state.delete == 1 ? <Notification /> : <div></div>}
                            </React.Fragment>
                        )
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    loading: state.loading,
    prod: state.secondaryData
})

const mapDispatchToProps = dispatch => {
    return ({
        del: (idx) => dispatch(del(idx)),
        add: (payload) => dispatch(add(payload)),
        filtering: (payload) => dispatch(filtering(payload)),
        sorting: (payload) => dispatch(sorting(payload)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)