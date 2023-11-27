import { http } from "../../utis/reponse";

export const GetListSchoolAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/school/');
            const action = {
                type: "GET_LIST_SCHOOL",
                arrSchool: result.data.data
            }
            console.log(result.data)
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}


export const UpdateSchoolAction = (id,value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/school/${id}`, value);
            const action = GetListSchoolAction()
            console.log(result.data)
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const CreateSchoolAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/school/`, value);
            const action = GetListSchoolAction()
            console.log(result.data)
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteSchoolAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/school/${id}`);
            const action = GetListSchoolAction()
            console.log(result.data)
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}