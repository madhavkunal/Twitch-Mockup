import React from 'react';
//Flash Video JS Player to obtain Streams from rtmp server into VideoBox DOM element
import flv from 'flv.js';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

class StreamShow extends React.Component {
    
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        //Match stream clicked on to StreamShow component
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }

        const {id} = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) { 
            //If no stream available then...
            return <div>Loading...</div>
        }   //Else if stream is available then...
        const {title, description} = this.props.stream;
             return (
                <div>
                    <video 
                        ref={this.videoRef} 
                        style={{width: '100%'}} 
                        controls /> 
                   <h1>{title}</h1>
                    <h5>{description}</h5>
                </div>
             )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);