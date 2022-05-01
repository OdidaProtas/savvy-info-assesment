import { createContext, useReducer, useContext } from "react";

// Create an innitial state to pass to the context API
const initialState: any = {};

// Creates context API for global state management
const ContextApi = createContext(initialState);

// Ancestor store component
export default function StoreProvider({ children }: any) {
  // Applies redux pattern to state management
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextApi.Provider value={[state, dispatch]}>
      {children}
    </ContextApi.Provider>
  );
}

// returns all data on store as object.
export const useStateValue = () => (useContext(ContextApi) as any)[0];

// Gets an array of items from the stores for a specified key and filters the needed object
export const useStateItem = (key: string, id: string) =>
  useContext(ContextApi)[0][key]?.filter(
    (item: any) => parseInt(item.id) === parseInt(id)
  )[0];

// Returns dispatch function to update store data
export const useDispatch = () => (useContext(ContextApi) as any)[1];

// Reducer function for modifying state
const reducer = (state: any, action: any) => {
  const options: any = {
    TOGGLE_LOADER: {
      //adds a global loader for specified context
      ...state,
      [`loading${action.context}`]: !Boolean(state[`loading${action.context}`])
    },
    ADD_MULTIPLE: {
      // whole items, ie array of items.
      ...state,
      [action.context]: action.payload
    },
    ADD_SINGLE: {
      // adds one item to existing array of items
      ...state,
      [action.context]: [
        Boolean(state[action.context]?.length)
          ? [...state[action.context]]
          : [...[]],
        action.payload
      ]
    },
    UPDATE_ENTRY: {
      // replaces object of id specified in payload with the new payload value. context required
      ...state,
      [action.context]: [...(state[action.context] || [])].map((value) =>
        value.id === action.payload.id
          ? { ...action.payload, edited: true }
          : value
      )
    },
    CONCAT_MULTIPLE: {
      // combines two arrays of given context
      ...state,
      [action.context]: [...(state[action.context] || [])].concat(
        action.payload
      )
    },
    CLEAR: {} //Resets store to its initial state.
  };

  return options[action.type] || { ...state };
};
