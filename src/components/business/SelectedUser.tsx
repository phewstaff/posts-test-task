import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUserStart } from "../../reduxStore/reducers/selectedUserSlice";

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
      {user && <h1>{user.email}</h1>}
      {loading && <>loading</>}
    </>
  );
};

export default SelectedUser;
