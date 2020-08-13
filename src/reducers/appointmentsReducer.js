import * as actions from '../actions/constants/ActionConstants'
const initState = {
    isLoading : false,
    appointments : [],
    addresses: [],
    postCode : null
}

const appointmentsReducer = (state = initState,action) =>{
    switch(action.type){
        case actions.GET_APPOINTMENTS_REQUEST:
            return state;
        case actions.GET_APPOINTMENTS_SUCESS:
                return {...state,appointments: action.appointments, isLoading:action.isLoading};
        case actions.GET_APPOINTMENTS_FAILURE:
            return state;
        default:
            return state;
    }

}
export default appointmentsReducer;