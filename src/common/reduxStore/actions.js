import AsyncStorage from "@react-native-async-storage/async-storage";

export const UPDATE_EXPENSES = "UPDATE_EXPENSES"
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES"

export function getAllData(){
    return async dispatch =>{
        console.log("Getting All data")

        dispatch(retrieveCategories());
        dispatch(retrievExpenses());
        console.log("Done fetching")


    }

}
export function retrieveCategories() {
    return async dispatch => {
        try {

            const value = await AsyncStorage.getItem('categories');
            if (value !== null) {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    payload: value
                })
            }
            console.log("action: running retrieveCategories-> value: "+ JSON.stringify(value))

        } catch (error) {
            console.error("action: retrieveCategories-> "+ JSON.stringify(error))
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
            console.log("action: running retrievExpenses-> value: "+ JSON.stringify(value))

            if (value !== null) {
                dispatch({
                    type: UPDATE_EXPENSES,
                    payload: value
                })
            }
        } catch (error) {
            console.error("action: retrievExpenses-> "+ JSON.stringify(error))
        }
    }
}

function backupData() {
    return async dispatch => {
        try {
            const value = await AsyncStorage.getItem('expenses');
            const categories = await AsyncStorage.getItem('categories');

            if (value !== null) {
                dispatch({
                    type: UPDATE_EXPENSES,
                    payload: value
                })
            }

            if (categories !== null) {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    payload: categories
                })
            }
        } catch (error) {
            // Error retrieving data
        }
    }


}

