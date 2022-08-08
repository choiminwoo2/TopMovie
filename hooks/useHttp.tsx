import { useReducer, useCallback } from "react";
interface Errors {
  status: string;
  message: string;
}
interface StateType {
  data: [] | null;
  error: String | null ;
  status: string | null;
}
interface Action {
  type: string;
  responseData ?: any ;
  errorMessage ?: any ;
  payload?: any;
}
function httpReducer(state: StateType, action: Action): StateType {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
}

function useHttp(requestFunction: any, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData: void) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        const err = error as Errors;
        dispatch({
          type: "ERROR",
          errorMessage: err.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
