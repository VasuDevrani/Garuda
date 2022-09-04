const { useReducer, createContext } = require("react");

export const Store = createContext();

const intialState = {
    userInfo: localStorage.getItem("userinfo")
    ? JSON.parse(localStorage.getItem("userinfo"))
    : null,
    events: [],
    loading: true,
    error: false
}

const Reducer = (state, action) => {
    switch(action.type){
        case "SIGN_IN":
            return {...state, userInfo: action.payload}
        case "SIGN_OUT":
            localStorage.clear();
            return {...intialState};
        default:
            return state;
    }
}

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, intialState);

    const value = {state, dispatch};
    return (
        <Store.Provider value={value}>
            {children}
        </Store.Provider>
    )
}

export default StateProvider;