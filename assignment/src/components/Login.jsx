import React from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {Link } from "react-router-dom"
firebase.initializeApp({
  apiKey: "AIzaSyDNDrqAm-S7v0eP-wRIVMrh-oXI_2Wpxw0",
  authDomain: "utilize-piyush-jain.firebaseapp.com"
})

class Trial extends React.Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", !!user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <div>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <button><Link to="/dashboard">Dashboard</Link></button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default Trial