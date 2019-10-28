import GetSomething from '../helpers/getSomething';

const charsReducer = (state={
    chars: [],
    isLoaded: false,
    isFetching: false
}, action) => {
    switch(action.type) {
        case "GET_CHARS_REQUEST":
            return {chars: [], isFetching: true, isLoaded: false};
        case "GET_CHARS_SUCCESS":
            return {chars: action.payload, isFetching: false, isLoaded: true};
        case "GET_CHARS_ERROR":
            return {chars: action.payload, isFetching: false, isLoaded: true};
        default:
            return state
    }
};

export default charsReducer;
