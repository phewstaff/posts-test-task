import Card from "react-bootstrap/Card";
import Comments from "../business/Comments";
import { Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { IPost } from "../../utils/types";
import { userImage } from "../../assets/const";

type Props = {
  post: IPost;
  isSelectedCard?: boolean;
};

const PostCard = (props: Props) => {
  const navigate = useNavigate();

  const handleclick = () => {
    if (props.isSelectedCard) {
      return null;
    } else {
      navigate(`/user/${props.post.userId}`);
    }
  };

  return (
    <Card className="m-auto w-75 my-4 text-capitalize">
      <Card.Body>
        <Card.Title>
          <Col className=" text-center mb-5">
            <Image
              onClick={handleclick}
              rounded
              className={`${!props.isSelectedCard && "pointer"}`}
              src={userImage}
              alt="avatar"
            />
          </Col>
          <Col className="mb-2">{props.post.title}</Col>
        </Card.Title>
        <Card.Text>{props.post.body}</Card.Text>
      </Card.Body>
      {!props.isSelectedCard}
      <Comments postId={props.post.id} />
    </Card>
  );
};

export default PostCard;
