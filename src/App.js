import React from 'react';
import './App.css';
import Loader from './components/loader';
import CharCard from './components/charCard';
import Search from "./components/search";
import CurrentChar from './components/charInfo';
import {connect} from "react-redux";
import {getChars, getChar} from "./actions/actions";
import {Grid} from "@material-ui/core";


class App extends React.Component {

  componentDidMount() {
        this.props.getCharsAction([{name: "nameStartsWith", value: "Spider-Man"}])
  }

  chooseChar = (char) => {

  };

   findChars = async (event) => {

  };


  render() {
      console.log(this.props)
        const {isLoaded, chars, isFetching} = this.props.charsReducer;
        let nothing = '';

        if(chars && chars.length === 0 && !isFetching) {
            nothing = <p>Noting was found...</p>
        }


    return (
        <div className="App" style={{maxWidth: '1200px', margin: '0 auto'}}>
            <CurrentChar />
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
        getCharsAction: (name) => dispatch(getChars(name)),
        getCharAction: (id) => dispatch(getChar(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

