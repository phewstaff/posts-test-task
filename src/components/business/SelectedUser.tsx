import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUserStart } from "../../reduxStore/reducers/selectedUserSlice";
import { userImage } from "../../assets/const";
import { Card, Container, Spinner, Button } from "react-bootstrap";
import SelectedUserPosts from "./SelectedUserPosts";

const SelectedUser: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.selectedUser.data);
  const loading = useAppSelector((state) => state.selectedUser.loading);
  const error = useAppSelector((state) => state.selectedUser.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserStart(id));
  }, []);

  const handleBackToPosts = () => {
    navigate("/posts");
  };

  return (
    <>
      <Container>
        <Button
          className="mb-5 mt-2"
          onClick={handleBackToPosts}
          variant="primary"
        >
          Back to posts page
        </Button>
      </Container>

      <Container className="col-md-4 mt-4 text-capitalize">
        {loading && (
          <Container className="d-flex min-vh-100 align-items-center mh-100 justify-content-center">
            <Spinner />
          </Container>
        )}
        {error && <> {error}</>}

        {user && !loading && (
          <Card className="profile-card">
            <div className="card-img-block">
              <Card.Img variant="top" src={userImage} alt="Card image" />
            </div>

            <Card.Body>
              <Card.Title>username: {user.username}</Card.Title>
              <Card.Title>name: {user.name}</Card.Title>
              <Card.Text>
                city: {user.address.city}, street: {user.address.street}, suite:{" "}
                {user.address.suite}, zipcode: {user.address.zipcode}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </Container>

      <hr />

      <Container>
        <Card.Title className="text-center">
          Posts written by {user?.name}:
        </Card.Title>
      </Container>

      <SelectedUserPosts />

      <Container className="text-center mt-4"></Container>
    </>
  );
};

export default SelectedUser;
