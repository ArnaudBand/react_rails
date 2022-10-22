const API_URL = 'http://localhost:3000/api/v1/greetings';
const HEADERS = {
  'content-type': 'application/json; charset=UTF-8',
};

const FETCH_GREETINGS = 'FETCH_GREETINGS';

const fetchGreetings = async () => {
  const response = await fetch('/api/v1/greetings', {
    method: 'GET',
    HEADERS
  });
  const data = await response.json();
  console.log(data)
  return data.message;
};

export const getGreetings = () => async (dispatch) => {
  const data = await fetchGreetings();
  dispatch({
    type: FETCH_GREETINGS,
    payload: data,
  });
};

export default function reducerGreetings(state = [], action) {
  switch (action.type) {
    case FETCH_GREETINGS:
      return { ...state, greetings: action.payload };
    default:
      return state;
  }
}