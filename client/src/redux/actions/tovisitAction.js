import { GLOBALTYPES } from './globalTypes'
import { postDataAPI, getDataAPI, patchDataAPI, deleteDataAPI } from '../../utils/fetchData'

export const TOVISIT_TYPES = {
    CREATE_TOVISIT: 'CREATE_TOVISIT',
    LOADING_TOVISIT: 'LOADING_TOVISIT',
    GET_TOVISITS: 'GET_TOVISITS',
    UPDATE_TOVISIT: 'UPDATE_TOVISIT',
    DELETE_TOVISIT: 'DELETE_TOVISIT'
}


export const createTovisit = ({placeName, auth}) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })

        const res = await postDataAPI('tovisits', { placeName }, auth.token)

        dispatch({ 
            type: TOVISIT_TYPES.CREATE_TOVISIT, 
            payload: {...res.data.newTovisit, user: auth.user} 
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: false} })

        
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}

export const getTovisit = (token) => async (dispatch) => {
    try {
        dispatch({ type: TOVISIT_TYPES.LOADING_TOVISIT, payload: true })
        const res = await getDataAPI('tovisits', token)
        
        dispatch({
            type: TOVISIT_TYPES.GET_TOVISITS,
            payload: {...res.data, page: 2}
        })

        dispatch({ type: TOVISIT_TYPES.LOADING_TOVISIT, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}

export const updateTovisit = ({placeName, status}) => async (dispatch) => {
    
    if(status.placeName === placeName) return;

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })

        const res = await patchDataAPI(`tovisit/${status._id}`, { 
           placeName 
        }, auth.token)

        dispatch({ type: TOVISIT_TYPES.UPDATE_TOVISIT, payload: res.data.newTovisit })

        dispatch({ type: GLOBALTYPES.ALERT, payload: {success: res.data.msg} })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}

export const deleteTovisit = ({tovisit, auth}) => async (dispatch) => {
    dispatch({ type: TOVISIT_TYPES.DELETE_TOVISIT, payload: tovisit })

    try {
        const res = await deleteDataAPI(`tovisit/${tovisit._id}`, auth.token)
        
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}
