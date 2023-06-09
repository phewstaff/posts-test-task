import { Card } from "react-bootstrap";
import { IComment } from "../../utils/types";

type Props = {
  comment: IComment;
};

const Comment = (props: Props) => {
  return (
    <Card bg="light" border="secondary" className="text-capitalize my-3">
      <Card.Body className="">
        <Card.Title className="text-dark"> {props.comment.email}</Card.Title>

        <Card.Text className="text-secondary">{props.comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
