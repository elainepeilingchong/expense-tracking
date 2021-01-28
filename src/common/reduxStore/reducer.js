import { UPDATE_CATEGORIES, UPDATE_EXPENSES } from "./actions";

const INITIAL_STATE = {
    categories: [],
    expenses: [],
    info:null,
    create_successfully: true,
    update_successfully: true,
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_EXPENSES:
            return {...state, expenses: action.payload };
        case UPDATE_CATEGORIES:
            return {...state, categories: action.payload };
        default:
            return state;
    }
  };