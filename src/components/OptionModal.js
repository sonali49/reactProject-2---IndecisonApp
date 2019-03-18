import React from 'react';
import Modal from 'react-modal';

const OptionModal=(props)=>(
<Modal 
className="modal"
isOpen={!!props.selectedContent}
onRequestClose={props.handleCloseOptionModal}
contentLabel="Selected Content"
>
<h3 className="modal__title">Selected Content</h3>
{props.selectedContent && <p class="modal__body">{props.selectedContent}</p>}
<button
 className="button"
 onClick={props.handleCloseOptionModal}
>Okay</button>
</Modal>
);


export default OptionModal;