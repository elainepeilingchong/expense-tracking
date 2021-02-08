import { ADD_CATEGORY, ADD_EXPENSE, UPDATE_CATEGORIES, UPDATE_EXPENSES } from "./actions";

const INITIAL_STATE = {
    categories: [],
    expenses: [],
    info: null,
    create_successfully: true,
    update_successfully: true,
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_EXPENSES:
            return { ...state, expenses: action.payload };
        case UPDATE_CATEGORIES:
            return { ...state, categories: action.payload };
        case ADD_CATEGORY:
            return { ...state, categories: [...state.categories, { name: action.payload.category_name, note: action.payload.note }] }
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        name: action.payload.expense_name,
                        note: action.payload.expense_note,
                        amount: action.payload.amount,
                        date: action.payload.date
                    }]
            }
        default:
            return state;
    }
};