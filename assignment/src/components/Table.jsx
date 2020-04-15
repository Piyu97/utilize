import React from "react"
import {del ,changeDelValue} from "../redux/action"
import {connect} from "react-redux"
import { Link } from "react-router-dom"

function Table({ perPage, activePage ,del,prod,changeDelValue}) {
    function handleDelete(idx){
        var res = window.confirm("Are you sure, To delete the item");
        if (res != true) {
            alert("You have Canceled Delete operation")
        }
        else {
            del(idx)
            setTimeout(() => {
                changeDelValue()
            }, 3000)
        }
    }
    return (
        <div className="table-responsive mt-5">
            <table className="table table-striped table-bordered table-hover">
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
                    {prod && prod.filter((item, i) => i >= perPage * (activePage - 1) && i <= perPage * (activePage)).map((item, idx) =>
                        <tr key={item.id}>
                            <td>{idx}</td>
                            <td>{item.customer_email}</td>
                            <td>{item.customer_name}</td>
                            <td>{item.product}</td>
                            <td>{item.quantity}</td>
                            <td><button className="btn btn-warning"><Link to={`/update/${item.id}`}>Update</Link></button></td>
                            <td><button className="btn btn-danger text-white" onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )

}
const mapStateToProps = (state) => ({
  perPage:state.perPage,
  activePage:state.activePage,
  prod: state.secondaryData,

})

const mapDispatchToProps =dispatch=> {
  return({
    del: (idx) => dispatch(del(idx)),
    changeDelValue: () => dispatch(changeDelValue()),
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)
