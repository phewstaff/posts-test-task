import React, { FC } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { IComment } from "../../reduxStore/reducers/comments";

const Comment: FC = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">email</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
