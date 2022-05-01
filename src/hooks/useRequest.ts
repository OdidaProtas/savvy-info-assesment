import axiosInstance from "../data/axiosInstance";
import { useDispatch } from "../data/store";
import { AxiosRequest } from "../types";

export default function useRequest() {
  const dispatch = useDispatch();

  //   Makes network request with axios instance
  async function request({
    method,
    context,
    url,
    action,
    payload,
    noloader
  }: AxiosRequest) {
    const promise = axiosInstance[method](url, payload);
    // refactors trycatch to a cleaner syntax
    const [res, error] = await tryCatch(promise);
    // hide loading indicator and dispatch data to global state
    if (res) {
      const { data } = res;
      if (!noloader)
        dispatch({ type: "TOGGLE_LOADER", context: `${cap(context)}` });
      dispatch({
        type: action,
        context: context,
        payload: data
      });
      return [true, null];
    }
    // Hide loading indicator and sets error as present on return
    if (!noloader)
      dispatch({ type: "TOGGLE_LOADER", context: `${cap(context)}` });
    return [null, error];
  }

  return request;
}

// Captializes first letter of string
function cap(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Refactor try catch blockF
async function tryCatch(promise: Promise<any>) {
  try {
    return [await promise, null];
  } catch (e) {
    return [null, e];
  }
}
