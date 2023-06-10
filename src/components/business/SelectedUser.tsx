import { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUserStart } from "../../reduxStore/reducers/selectedUserSlice";
import { userImage } from "../../assets/const";
import { Card, Container, Spinner } from "react-bootstrap";

const SelectedUser: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.selctedUser.data);
  const loading = useAppSelector((state) => state.selctedUser.loading);
  const error = useAppSelector((state) => state.selctedUser.error);

  useEffect(() => {
    dispatch(fetchUserStart(id));
  }, []);

  return (
    <>
      <Container className="col-md-4 mt-4 text-capitalize">
        {loading && (
          <Container className="d-flex min-vh-100 align-items-center mh-100 justify-content-center">
            <Spinner />
          </Container>
        )}
        {error && <>error: {error}</>}
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
    </>
  );
};

export default SelectedUser;
