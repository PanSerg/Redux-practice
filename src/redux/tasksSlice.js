import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from "./operations";

const tasksSlice = {
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  //     reducers: {
  //     fetchingInProgress(state) {
  //       state.isLoading = true;
  //     },
  //     fetchingSuccess(state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     fetchingError(state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
};

export const tasksReducer = tasksSlice.reducer;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;