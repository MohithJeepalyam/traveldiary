import { TOVISIT_TYPES } from '../actions/tovisitAction'
import { EditData, DeleteData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    tovisits: [],
    result: 0,
    page: 2
}

const tovistReducer = (state = initialState, action) => {
    switch (action.type){
        case TOVISIT_TYPES.CREATE_TOVISIT:
            return {
                ...state,
                tovisits: [action.payload, ...state.tovisits]
            };
        case TOVISIT_TYPES.LOADING_TOVISIT:
            return {
                ...state,
                loading: action.payload
            };
        case TOVISIT_TYPES.GET_TOVISITS:
            return {
                ...state,
                tovisits: action.payload.tovisits,
                result: action.payload.result,
                page: action.payload.page
            };
        case TOVISIT_TYPES.UPDATE_TOVISIT:
            return {
                ...state,
                tovisits: EditData(state.tovisits, action.payload._id, action.payload)
            };
        case TOVISIT_TYPES.DELETE_TOVISIT:
            return {
                ...state,
                tovisits: DeleteData(state.tovisits, action.payload._id)
            };
        default:
            return state;
    }
}

export default tovisitReducer