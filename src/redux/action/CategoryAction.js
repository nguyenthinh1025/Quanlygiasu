import { http } from "../../utis/reponse";

export const GetListCategoryAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/category/');
            const action = {
                type: "GET_LIST_CATEGORY",
                arrCategory: result.data.data
            }

            localStorage.setItem('category',JSON.stringify(result.data.data))
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}


export const UpdateCategoryAction = (id, value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/category/${id}`, value);
            const action = GetListCategoryAction()


            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}
export const CreateCategoryAction = ( value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/category/`, value);
            const action = GetListCategoryAction()
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteCategoryAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/category/${id}`);
            const action = GetListCategoryAction()


            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}