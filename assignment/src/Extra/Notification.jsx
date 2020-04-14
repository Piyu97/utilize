// function to add Notification when a tasklist is deleted
function Notification() {
    return (
        <MDBNotification
            style={{
                width: "auto",
                position: "fixed",
                top: "10%",
                right: "10px",
                zIndex: 9999
            }}
            show
            fade
            icon="envelope"
            iconClassName="green-text"
            title="New Message"
            message="Hello, user! You just deleted a Tasklist"
            text="just now"
        />
    );
}
{ this.state.delete == 1 ? <Notification /> : <div></div> }


// use timeout for 3sec 3000 after that show the compoment again
