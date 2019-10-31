const charReducer = (state = {
    currentChar: null,
    isLoaded: true,
    isFetching: false
}, action) => {
    switch (action.type) {
        case "GET_CHAR_REQUEST":
            return {currentChar: null, isFetching: true, isLoaded: false};
        case "GET_CHAR_SUCCESS":
            return {currentChar: action.payload[0], isLoaded: true, isFetching: false};
        case "GET_CHAR_ERROR":
            return {currentChar: action.payload[0], isLoaded: true, isFetching: false};
        default:
            return state;
    }
};

export default charReducer;