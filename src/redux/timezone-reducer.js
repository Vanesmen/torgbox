import { timezoneAPI } from '../api/api';
const SET_TIMEZONE_LIST = "SET-TIMEZONE-LIST";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  timezoneList: [],
  isReady: false,
}

const timezoneReducer = (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      return { ...state, isReady: action.isFetching };
    }
    case SET_TIMEZONE_LIST: {
      let timezoneList = action.timezoneList.timezone;

      return { ...state, timezoneList: timezoneList };
    }
    default:
      return state;
  }
}

export const setTimezoneCreator = (timezoneList) => ({ type: SET_TIMEZONE_LIST, timezoneList });
export const setFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });


export const getTimezone = () => async (dispatch) => {
  dispatch(setFetching(false));

  let data = await timezoneAPI.getTimezone();

  dispatch(setTimezoneCreator(data));

  dispatch(setFetching(true));
}

export default timezoneReducer;