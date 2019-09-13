import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, POSTING_SMURF_START, POSTING_SMURF_SUCCESS, POSTING_SMURF_FAILURE } from '../actions/actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case FETCHING_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to load Smurfs: ${action.payload}`
            }
        case POSTING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case POSTING_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case POSTING_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Unable to post New Smurf: ${action.payload}`
            }
        default:
            return state
    }
}