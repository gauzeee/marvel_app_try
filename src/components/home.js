import React from 'react';
import Loader from './loader';
import CharCard from './charCard';
import Search from "./search";
import {connect} from "react-redux";
import {getChars} from "../actions/actions";
import {Grid} from "@material-ui/core";


class Home extends React.Component {

    componentDidMount() {
        const lastSearch = this.props.charsReducer.lastSearch || sessionStorage.getItem('lastSearch') || 'Spider-Man';
        this.props.getCharsAction([{name: "nameStartsWith", value: lastSearch}])
    }


    render() {
        const {isLoaded, chars, isFetching} = this.props.charsReducer;
        let nothing = '';

        if(chars && chars.length === 0 && !isFetching) {
            nothing = <p>Noting was found...</p>
        }


        return (
            <div className="Home" style={{maxWidth: '1200px', margin: '0 auto'}}>
                <Search/>
                <Grid  container
                       direction="row"
                       justify="center"
                       alignItems="center">
                    {nothing}
                    {!isLoaded ? <Loader/> :  chars.map((item, i) => {
                        return <CharCard char={item} key={i}/>
                    })
                    }
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        getCharsAction: (name) => dispatch(getChars(name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

