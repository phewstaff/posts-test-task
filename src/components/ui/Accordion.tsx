import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Accordion, Spinner } from "react-bootstrap";
import { fetchCommentsStart } from "../../reduxStore/reducers/comments";

const useFetchComments = (postId: number, shouldFetch: boolean) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.data);

  useEffect(() => {
    if (shouldFetch && comments.length === 0) {
      dispatch(fetchCommentsStart(postId));
    }
  }, [dispatch, postId, shouldFetch, comments]);

  return comments;
};

const CommentsAccordion = ({ postId }: { postId: number }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const comments = useFetchComments(postId, isAccordionOpen);
  const commentsLoading = useAppSelector((state) => state.comments.loading);
  const commentsError = useAppSelector((state) => state.comments.error);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prevIsAccordionOpen) => !prevIsAccordionOpen);
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={handleAccordionToggle}>
          Comments
        </Accordion.Header>
        <Accordion.Body>
          {commentsLoading && <Spinner />}
          {comments && comments.map((comment) => <Comment key={comment.id} />)}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CommentsAccordion;
