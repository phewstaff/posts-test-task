import { FC } from "react";
import { Container, Spinner } from "react-bootstrap";
import PostCard from "../ui/PostCard";
import { useAppSelector } from "../../hooks/redux";
import PostsPagination from "../ui/postsPagination";

type Props = {};

const Posts: FC = (props: Props) => {
  const posts = useAppSelector((state) => state.posts.data);
  const loading = useAppSelector((state) => state.posts.loading);

  return (
    <Container className="d-flex min-vh-100 flex-column align-items-center mh-100 justify-content-center">
      {posts && <PostsPagination />}
      {loading && <Spinner className=""></Spinner>}
      {posts &&
        posts.map((item) => {
          return <PostCard post={item} key={item.id} />;
        })}
    </Container>
  );
};

export default Posts;
