import React from 'react'
import { connect } from "react-redux"

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { loading,prod } = this.props
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
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead className="bg-dark text-white">
                                            <tr>
                                                <td>SI.NO</td>
                                                <td>Customer_email</td>
                                                <td>Customer_Name</td>
                                                <td>Product</td>
                                                <td>Quantity</td>
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
                                                    <td>Delete</td>
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
    prod:state.database
})

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)