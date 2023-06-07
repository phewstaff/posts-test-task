import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Comment from "./Comment";
import CommentsAccordion from "./Accordion";

type Props = {};

const PostCard: FC = (props: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <CommentsAccordion postId={2} />
    </Card>
  );
};

export default PostCard;
