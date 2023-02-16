import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Calendar3 } from 'react-bootstrap-icons'
function filterDropdown() {
  return (
    <>
      <div className='bg-white rounded shadow p-3'>
        <Form>
          <Row>
            <Col md={5}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>From</Form.Label>
                <div className='position-relative'>
                  <Form.Control type="text" className='ps-5' placeholder='MM/DD/YYYY'/>
                  <Calendar3 className='ms-3 position-absolute start-0 top-50 translate-middle'/>
                </div>              
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>To</Form.Label>
                <div className='position-relative'>
                  <Form.Control type="text" className='ps-5' placeholder='MM/DD/YYYY'/>
                  <Calendar3 className='ms-3 position-absolute start-0 top-50 translate-middle'/>
                </div>              
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default filterDropdown