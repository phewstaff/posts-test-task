import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Spinner } from "react-bootstrap";
import PostCard from "../ui/PostCard";
import { fetchSelectedUserPostsStart } from "../../reduxStore/reducers/selectedUserPostsSlice";

const SelectedUserPosts = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.selectedUserPosts.posts);
  const loading = useAppSelector((state) => state.selectedUserPosts.loading);
  const error = useAppSelector((state) => state.selectedUserPosts.error);

  useEffect(() => {
    dispatch(fetchSelectedUserPostsStart(id));
  }, []);

  return (
    <>
      {error && <>error: {error} </>}
      {loading && <Spinner />}
      {posts &&
        posts.map((post) => {
          return <PostCard post={post} isSelectedCard={true} />;
        })}
    </>
  );
};

export default SelectedUserPosts;
