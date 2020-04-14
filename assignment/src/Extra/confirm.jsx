handleClick = () => {
    var res = window.confirm("Are you sure, To delete the item");
    if (res != true) {
        alert("You have Canceled Delete operation")
    } else {
        axios.post(`http://127.0.0.1:5000/delete/${this.props.match.params.id}`, { "id": this.props.match.params.id })
            .then(res => console.log(res))
    }
}

// try using alert prompt and confirm