import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ID = string | number; 

export interface PageState {
  page: ID;
}

const initialState: PageState = {
  page: "home",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<ID>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
