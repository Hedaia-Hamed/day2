import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const classListSlice = createSlice ({
    name :'classListSice',
    initialState : {
        class_name : [],
    },
    reducers :{

        setAllclasses :(state , action)=>{
            const _clone = [...state.class_name];
            _clone.push(action.payload);
            state.class_name = _clone;

        }
    }



    }
);

export const  {setAllclasses} = classListSlice.actions
export default classListSlice.reducer