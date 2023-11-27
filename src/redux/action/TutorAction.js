import { http } from "../../utis/reponse";

export const GetListTutorAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/tutor/');
            const action = {
                type: "GET_LIST_TUTOR",
                arrTutor: result.data.data
            }
            console.log(result.data.data)
            localStorage.setItem('tutor',JSON.stringify(result.data.data))
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}