import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import MultiColDataCollection from '../multiple-col-data-collection/MultiColDataCollection'
import './singleColDataCollection.css'

const SingleColDataCollection = () => {
    return (
        <>
            <Row>
                <Col md={12} className="mb-3">
                    <h4>Single Column Data Collection</h4>
                </Col>
                <Col md={4}>
                    <Card className="border-0">
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Text / Number Field</Form.Label>
                                    <Form.Control placeholder="Enter Collection Title" type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Text Area</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Description"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Collection Cycle</Form.Label>
                                    <div className='d-flex flex-wrap gap-2'>
                                        <Form.Check inline label="Hourly" type='radio' id="" className=''name="cycle" />
                                        <Form.Check inline label="Daily" type='radio' id="" className='' name="cycle" />
                                        <Form.Check inline label="Weekly" type='radio' id="" className='' name="cycle" />
                                        <Form.Check inline label="Monthly" type='radio' id="" className='' name="cycle" />
                                        <Form.Check inline label="Quarterly" type='radio' id="" className='' name="cycle" />
                                        <Form.Check inline label="Bi-Annually" type='radio' id="" className='' name="cycle" />
                                        <Form.Check inline label="Yearly" type='radio' id="" className='' name="cycle" />
                                    </div>
                                </Form.Group>
                                <div className="d-flex flex-wrap gap-2">
                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Data Collecters" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Dashboard Viewers" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Administrators" />
                                </Form.Group>
                                </div>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Dropdown</Form.Label>
                                    <Form.Select aria-label="Default select example" className='form-control'>
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-semibold mb-3'>Price</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1" className="border-0 bg-theme text-white">NGN</InputGroup.Text>
                                        <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-semibold mb-3'>Text Area</Form.Label>
                                    <Form.Control placeholder="Enter Collection Title" type="date" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                <Card className="border-0">
                        <Card.Body>
                            <Card.Title className='mb-0'>Multi column data collection</Card.Title>
                            <MultiColDataCollection />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>

    )
}

export default SingleColDataCollection
