const stateDefault = {
    arrCource:[],
    arrCourceLimit:JSON.parse(localStorage.getItem('courseslimit')),
    courseByID:{}
}


export const CourceReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_COURCE': {
            state.arrCource = action.arrCource;
            return { ...state }
        }
        case 'GET_LIST_COURCE_LIMIT': {
            state.arrCourceLimit = action.arrCourceLimit;
            return { ...state }
        }
        case 'GET_LIST_COURSE_BYID': {
            state.courseByID = action.courseByID;
            return { ...state }
        }
        default: return state;
    }
}