import { Card } from "react-bootstrap";
import { IComment } from "../../reduxStore/reducers/commentsSlice";

type Props = {
  comment: IComment;
};

const Comment = (props: Props) => {
  return (
    <Card bg="light" border="secondary" className="text-capitalize my-3 ">
      <Card.Body className="">
        <Card.Title className="text-dark">{props.comment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.comment.email}
        </Card.Subtitle>

        <Card.Text className="text-secondary">{props.comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
