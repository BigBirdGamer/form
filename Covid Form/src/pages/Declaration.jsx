import { React, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const Declaration = () => {
  const [name, setName] = useState("");
  const [tempreature, setTempreature] = useState(0);

  const handleSubmit = () => {};

  return (
    <div>
      <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          {/*  Name */}
          <Form.Group controlId="name">
            <Form.Label> Name </Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name "
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></Form.Control>
          </Form.Group>
          {/* Email */}
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              value={tempreature}
              onChange={(event) => setTempreature(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Do you have any of the following symptoms now or within the last 14 days: Cough, smell/taste impairment, fever, breathing difficulties, body aches, headaches, fatigue, sore throat, diarrhoea, and / or runny nose (even if your symptoms are mild)?"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Have you been in contact with anyone who is suspected to have or/has been diagnosed with Covid-19 within the last 14 days?"
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default Declaration;
