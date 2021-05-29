import React, { useState } from "react";
import { Button, Form, Row, Col } from 'react-bootstrap';

// GENERICS IN TYPESCRIPT ...
// useEffect,useState
// Form Component => Function based component
const AmForm = (props:any) => {
  // useState
  const [todo, setTodo] = useState("");
 

  const Submit = (event: any) => {
    event.preventDefault();
  
    props.setTodos([...props.mytodos,todo])
  };

  const handleChange = (event: any) => {
    setTodo(event.target.value);
    
  };
  
  return (
    <div>

    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
    <form onSubmit={Submit}>
      <input type="text" onChange={handleChange} className="form-control form-control-sm custom" />
      <Button variant="primary" size="lg" block type="submit">
        Add task
      </Button>
    </form>
    </div>
  );
};

export default AmForm;
