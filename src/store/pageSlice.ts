import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PageState {
  page: string | number;
}

const initialState: PageState = {
  page: "home",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string | number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
