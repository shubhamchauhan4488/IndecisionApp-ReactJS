import React from 'react'
import Modal from 'react-modal'

// !! of any string value will always return false b'cause "anyString" is actually true but needs to be converted to Boolean data type 
// and !"anystring" will make it false !!"anystring" will hence return true
const OptionModal = (props) => {
    return (
    //    content label is for deveices which have their accessibility setting on 
       <Modal 
       isOpen = {!!props.selectedOption}
       onRequestClose = {props.handleModalPress}//This will close the modal when we clock background/ hit 'Esc' key
       contentLabel = "Selected Option">
       <h3>Selected Option</h3>
       {props.selectedOption && <p>{props.selectedOption}</p>} 
       <button onClick = {props.handleModalPress}>Okay</button>
       </Modal>
    );
}

export default OptionModal;