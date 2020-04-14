import React from 'react'
import { connect } from "react-redux"
import {del} from "../redux/action"
import {Link} from "react-router-dom"

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    handleDelete = (idx) => {
        this.props.del(idx)
    }
    render() {
        const { loading, prod } = this.props
        console.log(prod)
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
                                <div class="table-responsive mt-5">
                                    <table class="table">
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
                                                <tr>
                                                    <td>{idx}</td>
                                                    <td>{item.customer_email}</td>
                                                    <td>{item.customer_name}</td>
                                                    <td>{item.product}</td>
                                                    <td>{item.quantity}</td>
                                                    <td><button ><Link to={`/update/${item.id}`}>Update</Link></button></td>
                                                    <td><button className="btn btn-danger text-white" onClick={() => this.handleDelete(item.id)}>Delete</button></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
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
        del:(idx)=>dispatch(del(idx))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)