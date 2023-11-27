import { http } from "../../utis/reponse";

export const GetListCourceAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/course/');
            const action = {
                type: "GET_LIST_COURCE",
                arrCource: result.data.data
            }
            console.log(result.data)
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}
export const UpdateCourceAction = (id,value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/course/${id}`, value);
            const action =GetListCourceAction()
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}
export const CreateCourceAction = (id,value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/course/${id}`, value);
            const action =GetListCourceAction()
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}
export const GetCourceByIDAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/course/getcoursebyid/${id}`);
            const action = {
                type: "GET_LIST_COURSE_BYID",
                courseByID: result.data.data
            }
            console.log(result.data.data)
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const GetListCourseLimitAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/course/getlistcourselimit');
            const action = {
                type: "GET_LIST_COURCE_LIMIT",
                arrCourceLimit: result.data.data
            }
            console.log(result.data.data)
            localStorage.setItem('courseslimit',JSON.stringify(result.data.data))
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

