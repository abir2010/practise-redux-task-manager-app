import { ADD, DELETE } from "./actionTypes";

const initialState = [];

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case DELETE: {
            const updatedSt = state.filter(
                (task) => task.id !== action.payload
            );
            return updatedSt;
        }
        default:
            return state;
    }
};

export default taskReducer;
