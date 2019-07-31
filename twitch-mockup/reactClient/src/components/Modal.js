import React from 'react';
import ReactDOM from 'react-dom';

//Reusable Modal Component

const Modal = props => {    //Popup modal for deleting a stream
    return ReactDOM.createPortal(
    /* 1st onclick Event Handler to Navigate user back to home 
    page (with history.push('/') from props.onDismiss) if they click anywhere on the page. 
    2nd onClick Event handler (with stopPropagation()) triggers 
    programmatic navigation back to homepage if user clicks anywhere
    on the page besides the modal. */ 
        <div onClick={props.onDismiss} 
             className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                    <div className="content">
                        {props.content}
                    </div>
                    <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>, 
        //Reference to 'div with id modal'
        document.querySelector('#modal')
    )
}

export default Modal;