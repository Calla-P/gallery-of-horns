import React from 'react';
import Modal from 'react-bootstrap/Modal';
import'./SelectedBeast.css';


class SelectedBeast extends React.Component {
    render() {
    return (
        <>
        <Modal
        show={this.props.show}
        onHide={this.props.handleCloseModal}
    >
        <Modal.Header closeButton>
            <Modal.Title>
                {this.props.selectedBeast}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <img
                src={this.props.selectedBeastImage}
                alt={this.props.selectedDescription}
                height={300}
                >
            </img>
            <p>{this.props.selectedDescription}</p>
        </Modal.Body>

    </Modal>
        </>
    )
    }
};

export default SelectedBeast;
