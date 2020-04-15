import React from "react"
import { MDBNotification } from "mdbreact";
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
            message="Hello, user! You just deleted a Order"
            text="just now"
        />
    );
}
export default Notification
