
import axios from "axios";

export const GETDATA_REQUEST = "GETDATA_REQUEST";
export const GETDATA_SUCCESS = "GETDATA_SUCCESS";
export const GETDATA_FAILURE ="GETDATA_FAAILURE";

const getDataRequest = () => {
    return{
        type: GETDATA_REQUEST,
    };
};

const getDataSuccess = (payload) => {
    return {
        type : GETDATA_SUCCESS,
        payload : payload,
    };
};

const getDataFailure = () => {
    return{
        type: GETDATA_FAILURE,
    };
};

export const getData = () => (dispatch) => {
    dispatch(getDataRequest());
    axios.get("http://localhost:8080/All")
    .then((res) => dispatch(getDataSuccess(res.data.All)))
    .catch((err) => dispatch(getDataFailure(err.res)))
}
