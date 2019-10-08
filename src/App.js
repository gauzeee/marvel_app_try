import React from 'react';
import './App.css';
import Loader from './components/loader';
import CharCard from './components/charCard';
import CurrentChar from './components/charInfo';
import getSomething from './helpers/getSomething';

const getter = new getSomething();

export default class App extends React.Component {

  state = {
    loading: true,
      chars: null,
      currentChar: null
  };

  async componentDidMount() {
    const chars = await getter.getCharacters([{name: 'nameStartsWith', value: 'Spider'}]);
    this.setState({
        chars,
        loading: false,
        currentChar: chars.data.results[3]
    });
    console.log(this.state)
  }

  chooseChar = (char) => {
      this.setState({
          currentChar: char
      })
  };

   findChars = async (event) => {
       this.setState({
           chars: null,
           loading: true
       });
      let heroName = event.target.value;
      if(!heroName.match(/[A-Z0-9]/gi)) heroName = 'Spider';
      const chars = await getter.getCharacters([{name: 'nameStartsWith', value: heroName}]);
      this.setState({
          chars,
          loading: false
      });
  };


  render() {
        const {loading, currentChar, chars} = this.state;
        let nothing = '';

        if(chars && chars.data.results.length === 0) {
            nothing = <p>Noting was found...</p>
        }


    return (
        <div className="App" style={{maxWidth: '1200px', margin: '0 auto'}}>
            <CurrentChar selectChar={currentChar}/>
            <input type="text" placeholder='For Example, Spider' onInput={this.findChars}/>
            <div style={{display: "flex", flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                {nothing}
                {loading ? <Loader/> :  chars.data.results.map((item, i) => {
                    return <CharCard chooseChar={this.chooseChar} char={item} key={i}/>
                })
                }
            </div>
        </div>
    );
  }
}


