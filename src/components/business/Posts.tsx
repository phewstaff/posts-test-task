import { FC, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import PostCard from "../ui/PostCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import PostsPagination from "../ui/postsPagination";
import { fetchPostsStart } from "../../reduxStore/reducers/postsSlice";

const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.posts.page);

  useEffect(() => {
    dispatch(fetchPostsStart(page));
  }, [dispatch, page]);

  const posts = useAppSelector((state) => state.posts.data);
  const loading = useAppSelector((state) => state.posts.loading);
  const error = useAppSelector((state) => state.posts.error);
  const searchQuery = useAppSelector((state) => state.posts.searchQuery);
  const sortOrder = useAppSelector((state) => state.posts.sortOrder);

  const filteredPosts = posts.filter(
    (post) =>
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedPosts = sortOrder
    ? filteredPosts.slice().sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (sortOrder === "asc") {
          return titleA.localeCompare(titleB);
        } else {
          return titleB.localeCompare(titleA);
        }
      })
    : filteredPosts;

  return (
    <Container className="d-flex min-vh-100 flex-column align-items-center mh-100 justify-content-center">
      {posts && <PostsPagination />}
      {loading && <Spinner></Spinner>}
      {error && <>{error}</>}
      {posts &&
        sortedPosts.map((item) => {
          return <PostCard isSelectedCard={false} post={item} key={item.id} />;
        })}
    </Container>
  );
};

export default Posts;
