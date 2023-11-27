const stateDefault = {
    arrSchool:[]
}


export const SchoolReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_SCHOOL': {
            state.arrSchool = action.arrSchool;
            return { ...state }
        }
      
        default: return state;
    }
}

