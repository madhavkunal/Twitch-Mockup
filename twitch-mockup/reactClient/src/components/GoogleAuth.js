import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
    window.gapi.load('client:auth2', () => { //Load OAuth Client from Google APIs
        window.gapi.client.init({ //Initialize Google API Library with OAuth 'clientId'
            clientId: '102675409019-bdjaie8900vv5ehus7qlmn896641k1es.apps.googleusercontent.com',
            scope: 'email'  //Specify client information we want to receive in scope
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.Ab.El);
        } else { 
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {  //when first loading
            return null;
        } else if (this.props.isSignedIn) { //is true
            return (
                    <button onClick={this.onSignOutClick}
                       className="ui red google button">
                    <i className="google icon" />
                        Sign Out
                    </button>
            )
            
        } else {    //is false
            return (
                    <button onClick={this.onSignInClick}
                       className="ui red google button">
                    <i className="google icon" />
                        Sign In With Google
                    </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);

//102675409019-bdjaie8900vv5ehus7qlmn896641k1es.apps.googleusercontent.com