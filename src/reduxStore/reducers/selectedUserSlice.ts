import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/types";

interface UserState {
  data: IUser | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: undefined,
  loading: false,
  error: null,
};

export const selectedUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStart(state, _action: PayloadAction<string | undefined>) {
      state.loading = true;
      state.error = null;
    },

    fetchUserSuccess(state, action: PayloadAction<IUser>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },

    fetchUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } =
  selectedUserSlice.actions;

export default selectedUserSlice.reducer;
