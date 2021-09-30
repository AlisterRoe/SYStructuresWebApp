import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import axios from 'axios'


export class RemarkModal extends Component {

    async handleSubmit(e, fileID, originalName) {
        e.preventDefault();
        if (e.target.Remark.value !== '') { 
            await this.renameID(fileID, originalName, e.target.Remark.value);
        }
        e.target.Remark.value = await null; // reset on submit
    }
    
    renameID(fileID, originalName, remark) {
        axios
          .post('http://localhost:5000/renameID', {
            name: originalName + " - " + remark,
            fileId: fileID
        })
    }

    render() {
        return (
            <Modal {...this.props} backdrop='static' keyboard="false">
                <Modal.Header>
                <Modal.Title>Add remark/description for uploaded files</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e) => { this.handleSubmit(e, this.props.remarkdata[0], this.props.remarkdata[1]) }}>
                    <Modal.Body>
                        <Container>
                            <Form.Group className="mb-2" id="job-number">
                                <Form.Label className="mb-0">REMARK/DESCRIPTION</Form.Label>
                                <Form.Control type="text" name="Remark" placeholder="Remark goes here"/>
                            </Form.Group>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        No Remark
                    </Button>
                    <Button variant="primary" type="submit" onClick={this.props.onHide}>
                        Add Remark
                    </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}