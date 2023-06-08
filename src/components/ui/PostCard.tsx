import { FC } from "react";
import Card from "react-bootstrap/Card";
import Comments from "../business/Comments";

type Props = {
  postId: number;
};

const PostCard = (props: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Comments postId={props.postId} />
    </Card>
  );
};

export default PostCard;
