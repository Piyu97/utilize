import React from 'react'
import { connect } from "react-redux"
import { del, add, filtering, sorting, changePerPage } from "../redux/action"
import { Link } from "react-router-dom"
import Notification from "./Notification"
import Pagination from "./Pagination"
import Table from "./Table"
import Add from "./Add"
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            delete: 0,
            update: 0
        }
    }
    
    componentDidMount = () => {
        this.props.changePerPage(this.props.perPage)
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
    handlePerPage = (e) => {
        this.props.changePerPage(e.target.value)
    }
    render() {
        const { loading, delValue} = this.props
        return (
            <div>
                <button className="btn btn-secondary m-3" onClick={() => this.props.history.goBack()}>GO BACK</button>
                {
                    loading ? (
                        <React.Fragment >
                            <div className="d-flex justify-content-center mt-5">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </React.Fragment >
                    ) : (
                            <React.Fragment>
                                <select onChange={this.handlePerPage}>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                <br></br>
                                <h5 className="text-center my-2">Click on<button type="button" className="btn mx-1" data-toggle="modal" data-target="#exampleModalCenter">
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
                                <Add></Add>
                                <br></br>
                                <Pagination></Pagination>
                                <Table></Table>
                                {delValue==1? <Notification/>:null }
                            </React.Fragment>
                        )
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    loading: state.loading,
    delValue:state.delValue
})

const mapDispatchToProps = dispatch => {
    return ({
        del: (idx) => dispatch(del(idx)),
        add: (payload) => dispatch(add(payload)),
        filtering: (payload) => dispatch(filtering(payload)),
        sorting: (payload) => dispatch(sorting(payload)),
        changePerPage: (payload) => dispatch(changePerPage(payload)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)