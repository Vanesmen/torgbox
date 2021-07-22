import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import PointerClock from "./PointerClock";
import TimeDisplay from './TimeDisplay';


function ClockCard(props) {
  let [timezone, changeTimezone] = useState(props.clockCard.timezoneList[0].timezone);

  let optionTimezone =
    props.clockCard.timezoneList.map(t => <option value={t.timezone} >{t.city}</option>);

  let handleChange = (event) => {
    changeTimezone(event.target.value);
  }

  return (
    <Card className="text-center" style={{ width: "252px" }}>
      <PointerClock height={250} width={250} timezone={timezone} />
      <Card.Body>
        <Card.Title><TimeDisplay timezone={timezone} /></Card.Title>
        <Form>
          <Form.Control as="select" onChange={handleChange}>
            {optionTimezone}
          </Form.Control>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ClockCard
