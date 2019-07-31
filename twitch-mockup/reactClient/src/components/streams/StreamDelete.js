import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions';

class StreamDelete extends React.Component {
    
    componentDidMount() {   
/* Action creator call to fetch stream with same id as stream 
associated with delete button that was clicked  */
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() { //Helper Method which contains buttons for DeleteStream Modal
    
    const id = this.props.match.params.id;
    
    return (
    /* We use React Fragment to return multiple elements (in this
    case, buttons) but not have presence in the DOM (like having
     extraneous divs) */
            <React.Fragment>  
                <button 
                    onClick = {() => this.props.deleteStream(id)}
                    className="ui button negative">
                        Delete
                </button>
                
                <Link /*Programmatic navigation from cancel
                button back to HomePage (with route "/") */
                    to="/" 
                    className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        )
    }

    renderContent() {
        if (!this.props.stream) { 
            //If our stream has not been loaded up yet ...
            return 'Are you sure you want to delete this stream?'
        }   //Else if our stream has been loaded up ...
            return `Are you sure you want to delete:
             ${this.props.stream.title}`
    }

    render() {
    return (
        /* Modal is linked to index.html file and wrapped in div with 
        id Modal so we don't need extraneous divs */
            <Modal  //Customization of Stream Delete Modal with props
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()} //Actions prop contains buttons 
                onDismiss={() => history.push('/')}
            />  
        )
    }
}

/* Store mapStateToProps from React-Redux  */
const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

/* We wire up fetchStream and deleteStream action creators to
StreamDelete component with connect() and mapStateToProps */
export default connect(mapStateToProps, 
    {fetchStream, deleteStream})(StreamDelete);