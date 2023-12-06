import { ADD, DELETE } from "./actionTypes";

export const addTask = (value) => {
    return {
        type: ADD,
        payload: value,
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE,
        payload: id,
    };
};
