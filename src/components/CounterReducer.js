import axios from "axios";
import React, {useReducer, useEffect} from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FAILED":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      return state
  }
};


function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/1'

    useEffect(() => {
        axios.get(BASE_URL)
        .then(
            resp => {
                dispatch({type : 'SUCCESS', payload : resp.data})
            }
        )
        .catch(
            resp => {
                dispatch({type : 'FAILED', payload : {}})
            }
        )
    }, [])
  return <div>
      {state.loading ? 'Loading': state.post.title}
      {state.error ? "error" : null}
  </div>;
}

export default CounterReducer;
