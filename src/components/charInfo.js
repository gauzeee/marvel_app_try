import React from 'react';
import Loader from './loader';
import '../styles/char.scss';
import {connect} from "react-redux";


class CharInfo extends React.Component {

    renderCard = (char) => {
        console.log(char)
        return (<div>
                <div className="image">
                    <img src={`${char.thumbnail.path}/portrait_xlarge.jpg`} />
                </div>
                <div className="name">{char.name}</div>
            </div>
        )
    };

     componentDidMount() {
         console.log(this.props)
    }


    render() {
        let {isLoaded, currentChar} = this.props;
        console.log(currentChar);
        return (
            <div className="char-content">
                {!isLoaded ? <Loader/> : this.renderCard(currentChar)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.charReducer;
}

export default connect(mapStateToProps)(CharInfo);
