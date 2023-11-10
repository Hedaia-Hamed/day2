import { configureStore } from "@reduxjs/toolkit";
import classListSlicer from "./components/studentList/classListSlicer";

export const store = configureStore({


    reducer : {
        classListSlicer :classListSlicer
    }
});