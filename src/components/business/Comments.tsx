import { useEffect, useState } from "react";
import { Accordion, Spinner } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCommentsStart } from "../../reduxStore/reducers/commentsSlice";
import Comment from "../ui/Comment";

const useFetchComments = (postId: number, isAccordionOpen: boolean) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments.data[postId] || []);

  useEffect(() => {
    if (isAccordionOpen && comments.length === 0) {
      dispatch(fetchCommentsStart(postId));
    }
  }, [dispatch, postId, isAccordionOpen, comments.length]);

  return comments;
};

const Comments = ({ postId }: { postId: number }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const comments = useFetchComments(postId, isAccordionOpen);
  const commentsLoading = useAppSelector((state) => state.comments.loading);
  const commentsError = useAppSelector((state) => state.comments.error);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prevIsAccordionOpen) => !prevIsAccordionOpen);
  };

  return (
    <Accordion>
      <Accordion.Item eventKey={`accordion-${postId}`}>
        <Accordion.Header onClick={handleAccordionToggle}>
          Comments
        </Accordion.Header>
        <Accordion.Body>
          {commentsError && <>Произошла ошибка загрузки комментариев</>}
          {commentsLoading && <Spinner />}
          {comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Comments;
