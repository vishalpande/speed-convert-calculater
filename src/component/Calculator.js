import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function Calculator() {
  const [SpeedObj, setSpeedObj] = useState({
    kmph: 0,
    mph: 0,
  });

  const convertKmphToMph = (kmph) => {
    const mph = kmph/1.6;
    setSpeedObj({ kmph: kmph, mph: mph });
  };

  const convertMphToKmph = (mph) => {
    const kmph= mph*1.6;
    setSpeedObj({ kmph: kmph, mph: mph });
  };

  return (
    <div>
      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Speed Converter</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            Converter Kmph To Mph
          </Card.Subtitle>
          <hr />
        
            <KmphInput converter={convertKmphToMph} speed={SpeedObj.kmph} />
            <MphInput converter={convertMphToKmph} speed={SpeedObj.mph} />
         
        </Card.Body>
      </Card>
    </div>
  );
}

const KmphInput = ({ converter, speed }) => {



  const handler = (e) => {
    converter(e.target.value);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Speed (Kmph)</Form.Label>
      <Form.Control
        type="number"
        value={speed}
        onChange={handler}
        placeholder="Enter speed in kmph"
      />
      {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
    </Form.Group>
  );
};

const MphInput = ({ converter, speed }) => {
  const handler = (e) => {
    converter(e.target.value);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Speed (Mph)</Form.Label>
      <Form.Control onChange={handler } value={speed} type="number" placeholder="Enter speed in Mph" />
      {/* <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text> */}
    </Form.Group>
  );
};
