import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { setSortOrder } from "../../reduxStore/reducers/postsSlice";

const SortSelector: FC = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(e.target.value as "asc" | "desc"));
  };

  return (
    <Form.Group className="">
      <Form.Select onChange={handleSortChange}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="">Not sorted</option>
      </Form.Select>
    </Form.Group>
  );
};

export default SortSelector;
