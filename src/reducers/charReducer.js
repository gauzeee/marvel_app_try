const charReducer = (state = {
    currentChar: {name: "Choose somebody", thumbnail: {path: ''}, description: null},
    isLoaded: true,
    isFetching: false
}, action) => {
    switch (action.type) {
        case "GET_CHAR_REQUEST":
            return {currentChar: {}, isFetching: true, isLoaded: false};
        case "GET_CHAR_SUCCESS":
            return {currentChar: action.payload[0], isLoaded: true, isFetching: false};
        case "GET_CHAR_ERROR":
            throw new Error(action.payload);
        default:
            return state;
    }
};

export default charReducer;