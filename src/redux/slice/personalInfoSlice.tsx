import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  dataAux: "",
};

export const globalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDataPersonal: (state, action) => {
      state.dataAux = action.payload;
      state.data = state.dataAux;
    },
    getDataPersonal: (state) => {
      state.data = state.dataAux;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataPersonal, getDataPersonal } = globalSlice.actions;

export default globalSlice.reducer;
