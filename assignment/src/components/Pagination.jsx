import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../redux/action'


const Pagination = ({ activePage, totalPages, changePage }) => {

    const pageList = []
    for (let i = activePage - 1; i >= 0 && i <= activePage + 5 && i <= totalPages; i++) {
        if (i === activePage - 1) {
            if (i !== 0)
                pageList.push(<li key={i} onClick={() => changePage(activePage - 1)} className="page-item list-inline-item border border-danger p-2">Previous</li>)
            continue;
        }
        if (i === activePage + 5) {
            pageList.push(<li key={i} onClick={() => changePage(activePage + 1)} className="page-item list-inline-item border border-danger p-2">Next</li>)
            continue;
        }
        pageList.push(<li key={i} style={{ color: `${activePage === i ? 'green' : 'black'}` }} onClick={() => changePage(i)} className=" border p-2 page-item list-inline-item">{i}</li>)
    }
    return (
        <React.Fragment>
            {totalPages !== 0 && pageList}
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    activePage: state.activePage,
    perPage: state.perPage,
    totalPages: state.totalPages
})

const mapDispatchToProps = dispatch => ({
    changePage: (payload) => dispatch(changePage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

