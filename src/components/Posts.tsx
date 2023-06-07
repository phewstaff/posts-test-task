import { FC } from "react";
import { Container, Spinner } from "react-bootstrap";
import PostCard from "./ui/PostCard";
import { useAppSelector } from "../hooks/redux";

type Props = {};

const Posts: FC = (props: Props) => {
  const posts = useAppSelector((state) => state.posts.data);
  const loading = useAppSelector((state) => state.posts.loading);

  return (
    <Container>
      {loading && <Spinner></Spinner>}
      {posts &&
        posts.map((item) => {
          return <PostCard key={item.id} />;
        })}
    </Container>
  );
};

export default Posts;
