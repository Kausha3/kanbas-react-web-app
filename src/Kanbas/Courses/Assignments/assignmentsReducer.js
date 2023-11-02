import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  assignments: db.assignments,
  assignment: { name: "New assignment", description: "New Description" },
};

const assignmentSlice = createSlice({
  name: "assignents",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assigment) => {
        if (assigment._id === action.payload._id) {
          return action.payload;
        } else {
          return assigment;
        }
      });
    },

    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },

    // setModules: (state, action) => {
    //     state.modules = state.modules.map((module) => {
    //       if (module._id === action.payload._id) {
    //         return action.payload;
    //       } else {
    //         return module;
    //       }
    //     });
    //   },

    // resetModule: (state) => {
    //     state.assigment = { name: "New Assig 123", description: "New Description" };
    // },

  },
});


export const { addAssignment, deleteModule,
  updateModule, setModule,resetModule } = assignmentSlice.actions;
export default assignmentSlice.reducer;