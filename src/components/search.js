import React from 'react';
import '../styles/char.scss'
import {connect} from "react-redux";
import {getChars} from "../actions/actions";
import {Grid, Button, TextField, FormControl} from "@material-ui/core";

class Search extends React.Component{
    state = {
        inputVal: '',
        lastVal: 'Hero Name'
    }

    updateInputVal = e => {
        this.setState({
            inputVal: e.target.value,
            lastVal: this.state.lastVal
        })
    }

    searchAction = () => {
        this.props.getCharsAction(this.state.inputVal);
        this.setState({
            lastVal: this.state.inputVal,
            inputVal: ''
        })
        document.getElementById('outlined-name').value = '';
    }


    render() {
        return (
            <Grid
                container
                   direction="row"
                   justify="center"
                   alignItems="center">
                <FormControl>
                    <TextField
                        id="outlined-name"
                        label={this.state.lastVal}
                        className=""
                        onChange={this.updateInputVal}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button onClick={this.searchAction} variant="contained" color="primary">Search</Button>
                </FormControl>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCharsAction: (name) => dispatch(getChars([{name: "nameStartsWith", value: name}]))
    }
}


export default connect(null, mapDispatchToProps)(Search);