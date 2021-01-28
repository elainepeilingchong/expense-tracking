import AsyncStorage from "@react-native-async-storage/async-storage";

export const UPDATE_EXPENSES = "UPDATE_EXPENSES"
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES"

export function retrieveCategories(params) {
    return async dispatch => {
        try {
            const value = await AsyncStorage.getItem('categories');
            if (value !== null) {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    payload: value
                })
            }
        } catch (error) {
            // Error retrieving data
        }
    }
}

export function storeCategory(params) {
    return async dispatch => {
        try {
            await AsyncStorage.setItem(
                'categories',
                'I like to save it.'
            );
        } catch (error) {
            // Error saving data
        }
    }
}

export function storeExpense(params) {
    return async dispatch => {
        try {
            await AsyncStorage.setItem(
                '@MySuperStore:key',
                'I like to save it.'
            );
        } catch (error) {
            // Error saving data
        }
    }
}

export function retrievExpenses() {
    return async dispatch => {
        try {
            const value = await AsyncStorage.getItem('expenses');
            if (value !== null) {
                dispatch({
                    type: UPDATE_EXPENSES,
                    payload: value
                })
            }
        } catch (error) {
            // Error retrieving data
        }
    }
}

function backupData() {
    return async dispatch => {
        try {
            const value = await AsyncStorage.getItem('expenses');
            const value = await AsyncStorage.getItem('categories');

            if (value !== null) {
                dispatch({
                    type: UPDATE_EXPENSES,
                    payload: value
                })
            }
        } catch (error) {
            // Error retrieving data
        }
    }


}

