import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardComponent(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`https://joeschmoe.io/api/v1/${props.user.last_name}`} />
      <Card.Body>
        <Card.Title>{props.user.first_name}</Card.Title>
        <Card.Text>
          {props.user.email}
        </Card.Text>
        <Button variant="primary">more details</Button>
      </Card.Body>
    </Card>
  );
}
