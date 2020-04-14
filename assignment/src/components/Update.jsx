import React from 'react'
import { connect } from "react-redux"


class Update extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Product: "",
            customer_name: "",
            customer_email: "",
            quantity: 0
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    componentDidMount = () => {
        var temp=this.props.prod.find((item)=>(item.id).toString()==(this.props.match.params.id).toString())
this.setState({
    Product:temp.Product,
    customer_email:temp.customer_email,
    customer_name:temp.customer_name,
quantity:temp.quantity,
})
    }
    render() {
        const { loading, prod } = this.props
        console.log(prod)
        console.log(this.state)
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
                                <div className="d-flex justify-conetnt-center">
                                    <div className="mx-auto mt-5">
                                        <form>
                                            <div className="clearfix">
                                                <div className="float-left">Product Name</div>
                                                <div className="float-right"><input type="text" name="Product" onChange={this.handleChange}></input></div>
                                            </div>
                                            <div className="clearfix">
                                                <div className="float-left">Customer Email</div>
                                                <div className="float-right"><input type="text" name="customer_email" onChange={this.handleChange}></input></div>
                                            </div>
                                            <div className="clearfix">
                                                <div className="float-left">Quantity</div>
                                                <div className="float-right"><input type="text" name="quantity" onChange={this.handleChange}></input></div>
                                            </div>
                                            <div className="clearfix">
                                                <div className="float-left">Customer name</div>
                                                <div className="float-right"><input type="text" name="customer_name" onChange={this.handleChange}></input></div>
                                            </div>
                                        </form>
                                    </div>
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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Update)