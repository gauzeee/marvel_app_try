import GetSomething from "../helpers/getSomething";
import {logger} from "redux-logger/src";

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
            let newData = data;
            if(data.code === 404) {
                newData = [{
                    name: data.code,
                    description: data.status,
                    thumbnail: {
                        full: true,
                        path: 'https://qph.fs.quoracdn.net/main-qimg-67664d785c6b7f76c273cfabf120ef5e'
                    }
                }]
            } else {
                newData = data.data.results
            }
            dispatch({
                type: "GET_CHAR_SUCCESS",
                payload: newData
            })
        }).catch(err => {
            dispatch({
                type: "GET_CHAR_ERROR",
                payload: err
            })
        })
    }
}