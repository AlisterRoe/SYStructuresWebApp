import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';


export class RemarkModal extends Component {

    handleSubmit(e) {
        e.preventDefault();

        console.log(e.target.Remark.value);
    }

    render() {
        return (
            <Modal {...this.props} backdrop='static' keyboard="false">
                <Modal.Header>
                <Modal.Title>Add remark/description for uploaded files</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <Container>
                            <Form.Group className="mb-2" id="job-number">
                                <Form.Label className="mb-0">REMARK/DESCRIPTION</Form.Label>
                                <Form.Control type="text" name="Remark" placeholder="Remark goes here" required />
                            </Form.Group>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        No Remark
                    </Button>
                    <Button variant="primary" type="submit">
                        Add Remark
                    </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}