import React from 'react';
import '../styles/char.scss'
import {connect} from "react-redux";
import {getChars} from "../actions/actions";
import {Grid, Button, TextField} from "@material-ui/core";


class Search extends React.Component{
    state = {
        inputVal: ''
    }

    updateInputVal = e => {
        this.setState({
            inputVal: e.target.value
        })
    }

    searchAction = () => {
        this.props.getCharsAction(this.state.inputVal);
        sessionStorage.setItem('lastSearch', this.state.inputVal);
        this.setState({
            inputVal: ''
        })
        document.getElementById('outlined-name').value = '';
    }


    render() {
        console.log(this.state, this.props);
        return (
            <Grid
                container
                   direction="row"
                   justify="center"
                   alignItems="center">

                    <TextField
                        id="outlined-name"
                        label={this.props.lastSearch ? this.props.lastSearch : 'Hero Name'}
                        className=""
                        onChange={this.updateInputVal}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button style={{marginLeft: "8px", height: "54px", marginTop: "6px"}} onClick={this.searchAction} variant="contained" color="primary">Search</Button>

            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return state.charsReducer;
}

const mapDispatchToProps = dispatch => {
    return {
        getCharsAction: (name) => dispatch(getChars([{name: "nameStartsWith", value: name}]))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);