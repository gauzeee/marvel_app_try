import GetSomething from "../helpers/getSomething";

export const getChars = (name) => {
    return dispatch => {
        dispatch({
            type: "GET_CHARS_REQUEST",
            payload: name
        });

        GetSomething.getCharacters(name).then(data=> {
            console.log("THERE IS A DATA", data.data.results);
            dispatch({
                type: "GET_CHARS_SUCCESS",
                payload: data.data.results
            })
        }).catch(err => {
            dispatch({
                type: "GET_CHARS_ERROR",
                payload: err
            })
        })
    }
}
export const getChar = (id) => {
    return dispatch => {
        dispatch({
            type: "GET_CHAR_REQUEST",
            payload: id
        });
        GetSomething.getCharacter(id).then(data => {
            dispatch({
                type: "GET_CHAR_SUCCESS",
                payload: data.data.results
            })
        }).catch(err => {
            dispatch({
                type: "GET_CHAR_ERROR",
                payload: err
            })
        })
    }
}