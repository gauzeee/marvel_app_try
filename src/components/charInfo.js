import React from 'react';
import Loader from './loader';
import '../styles/char.scss'
import GetSomething from '../helpers/getSomething';

const getter = new GetSomething();

export default class CharInfo extends React.Component {
    state = {
        loading: true,
        character: null,
        charId: 1017603
    };



    renderCard = (char) => {

        return (<div>
                <div className="image">
                    <img src={`${char.thumbnail.path}/portrait_xlarge.jpg`} />
                </div>
                <div className="name">{char.name}</div>
            </div>
        )
    };

    async componentDidMount() {
        const char = await getter.getCharacter(this.state.charId);
        this.setState({
            character: char.data.results[0],
            loading: false
        })
        console.log(this.state)
    }


    render() {
        let {loading, character} = this.state;
        const {selectChar} = this.props;

        console.log(this.props)
        
        if(selectChar) character = selectChar;
        
        return (
            <div className="char-content">
                {loading ? <Loader/> : this.renderCard(character)}
            </div>
        )
    }
}