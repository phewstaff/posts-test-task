import { Pagination } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { MemoizedPageArray, getPageCount } from "../../utils/pages";
import { setCurrentPage } from "../../reduxStore/reducers/postsSlice";
import { FC } from "react";

const postsPagination: FC = () => {
  const limit = useAppSelector((state) => state.posts.limit);
  const totalPostsCount = useAppSelector(
    (state) => state.posts.totalPostsCount
  );

  const dispatch = useAppDispatch();

  const pagesCount = getPageCount(totalPostsCount, limit);
  return (
    <Pagination className="mt-3" size="sm">
      {MemoizedPageArray(pagesCount).map((p) => {
        return (
          <Pagination.Item key={p} onClick={() => dispatch(setCurrentPage(p))}>
            {p}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default postsPagination;
