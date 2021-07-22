import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ClockCard from '../ClockCard/ClockCard';

function Content(props) {
  let [clockNumber, setClockNumber] = useState(2);

  let handleSet25 = () => {
    setClockNumber(25);
  }

  let handleReset = () => {
    setClockNumber(2);
  }

  return (
    <Container>
      <Row className="mt-2">
        <Col>
          <Button variant="primary" className="me-2" onClick={handleSet25}>Create 25</Button>
          <Button variant="primary" className="me-2" onClick={handleReset}>Refresh</Button>
        </Col>
      </Row>
      <Row xs={1} md={4} className="g-4" className="mt-2">
        {Array.from({ length: clockNumber }).map((_, idx) => (
          <Col>
            <ClockCard clockCard={props.clockCard} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Content
