// SearchBar.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CloseButton, Form } from "react-bootstrap";
import { setSearchQuery } from "../../reduxStore/reducers/postsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  const clearSearch = () => {
    setSearchValue("");
    dispatch(setSearchQuery(""));
  };

  return (
    <Form.Group className="d-flex align-items-center position-relative">
      <Form.Control
        type="text"
        placeholder="Search by post title"
        value={searchValue}
        onChange={handleSearchChange}
      />
      {searchValue && (
        <CloseButton
          onClick={clearSearch}
          className="position-absolute end-0 "
        />
      )}
    </Form.Group>
  );
};

export default SearchBar;
