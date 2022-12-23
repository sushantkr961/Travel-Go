import {
  DATA_ERROR,
  DATA_LOADING,
  DATA_SUCCESS,
  EMPTY_INPUT,
  HOTEL_LIST_ERROR,
  HOTEL_LIST_LOADING,
  HOTEL_LIST_SUCCESS,
} from "./data.type";

const getData = (info) => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  fetch(`http://localhost:8080/hotel?query=${info}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      dispatch({
        type: DATA_SUCCESS,
        payload: response.hotels,
      });
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
      console.error(err);
    });
};
export const emptyData = () => ({ type: EMPTY_INPUT });

export const hotelList = (info) => (dispatch) => {
  console.log(info);
  dispatch({ type: HOTEL_LIST_LOADING });
  fetch(`http://localhost:8080/hotel?query=${info}`)
    .then((response) => response.json())
    .then((response) => {
      dispatch({ type: HOTEL_LIST_SUCCESS, payload: response.hotels });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: HOTEL_LIST_ERROR });
    });
};

export default getData;
