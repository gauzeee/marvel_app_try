import GetSomething from '../helpers/getSomething';

const charsReducer = (state={
    chars: [],
    lastSearch: null,
    isLoaded: false,
    isFetching: false
}, action) => {
    switch(action.type) {
        case "GET_CHARS_REQUEST":
            return {chars: [], isFetching: true, isLoaded: false, lastSearch: action.payload[0].value};
        case "GET_CHARS_SUCCESS":
            return {chars: action.payload, isFetching: false, isLoaded: true, lastSearch: state.lastSearch};
        case "GET_CHARS_ERROR":
            console.log(action);
            return {chars: action.payload, isFetching: false, isLoaded: true, lastSearch: state.lastSearch};
        default:
            return state
    }
};

export default charsReducer;
