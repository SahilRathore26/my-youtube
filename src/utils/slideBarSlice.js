import { createSlice } from "@reduxjs/toolkit";

const slideBar = createSlice({
  name: "slideBar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = slideBar.actions;
export default slideBar.reducer;