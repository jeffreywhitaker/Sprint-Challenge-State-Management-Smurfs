import axios from 'axios'

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START'
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS'
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE'
export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START})
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err})
        })
}

export const POSTING_SMURF_START = 'POSTING_SMURF_START'
export const POSTING_SMURF_FAILURE = 'POSTING_SMURF_FAILURE'
export const POSTING_SMURF_SUCCESS = 'POSTING_SMURF_SUCCESS'
export const postSmurf = (newSmurf) => dispatch => {
    dispatch({ type: POSTING_SMURF_START})
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res)
            dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: POSTING_SMURF_FAILURE, payload: err})
        })
}

export const DELETING_SMURF_START = 'DELETING_SMURF_START'
export const DELETING_SMURF_FAILURE = 'DELETING_SMURF_FAILURE'
export const DELETING_SMURF_SUCCESS = 'DELETING_SMURF_SUCCESS'
export const deleteSmurf = (smurfId) => dispatch => {
    dispatch({ type: DELETING_SMURF_START})
    axios
        .delete(`http://localhost:3333/smurfs/${smurfId}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETING_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: DELETING_SMURF_FAILURE, payload: err})
        })
}

