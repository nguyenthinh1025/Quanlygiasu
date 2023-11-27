const stateDefault = {
    arrTutor:JSON.parse(localStorage.getItem('tutor'))
}


export const TutorReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_TUTOR': {
            state.arrTutor = action.arrTutor;
            return { ...state }
        }
      
        default: return state;
    }
}

