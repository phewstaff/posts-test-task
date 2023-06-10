import { Card } from "react-bootstrap";
import { IComment } from "../../utils/types";
import { FC } from "react";

type Props = {
  comment: IComment;
};

const Comment: FC<Props> = (props) => {
  return (
    <>
      <Card bg="light" border="secondary" className="text-capitalize my-3">
        <Card.Body className="">
          <Card.Title className="text-dark"> {props.comment.email}</Card.Title>
          <Card.Text className="text-secondary">{props.comment.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Comment;
