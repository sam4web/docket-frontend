import { apiSlice } from "@/app/api/apiSlice.js";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const noteAdapter = createEntityAdapter({
  selectId: (book) => book._id,
  sortComparer: (a, b) => a.updatedAt.localeCompare(b.updatedAt),
});

const initialState = noteAdapter.getInitialState();

export const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotes: builder.query({
      query: () => ({
        url: "/notes",
        validateStatus: (response) => response.status && !response.isError,
      }),
      providesTags: (result, error, arg) => {
        if (result.ids)
          return result.ids.map(id => ({ type: "Note", id }));
        return [{ type: "Note", id: "LIST" }];
      },
      transformResponse(responseData) {
        const loadedNotes = responseData.map(note => {
          note.id = note._id;
          return note;
        });
        return noteAdapter.setAll(initialState, loadedNotes);
      },
    }),
  }),
});

const selectAllNotesResult = noteApiSlice.endpoints.getAllNotes.select();

const selectNotesData = createSelector([selectAllNotesResult], (state) => state.data);

export const {
  selectAll: selectAllNotes,
  selectIds: selectNoteIds,
  selectById: selectNoteById,
} = noteAdapter.getSelectors(state => selectNotesData(state) ?? initialState);

export const { useGetAllNotesQuery } = noteApiSlice;