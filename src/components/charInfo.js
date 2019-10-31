import React from 'react';
import Loader from './loader';
import '../styles/char.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getChar} from "../actions/actions";
import {Button} from "@material-ui/core";
import ComicsList from "./comicsList";


class CharInfo extends React.Component {

    renderCard = (char) => {
        if(char) return (<div className='content'>
                <Link to='/'>
                    <Button variant="contained" color="secondary" style={{position: 'absolute', left: '30px', top: '30px'}}>Back</Button>
                </Link>
                <div className="card-wrapper" style={{width: "60%", margin: "0 auto"}}>
                    <div>
                        <div className="image" style={{minHeight: "225px", backgroundColor: "#efefef"}}>
                            <img style={{maxWidth: "300px"}} src={char && char.thumbnail.full ? `${char.thumbnail.path}` : `${char.thumbnail.path}/portrait_xlarge.jpg`} />
                        </div>
                        <div className="name">{char.name}</div>
                    </div>
                    <div className="info" style={{maxWidth: '90%', margin: "32px auto"}}>
                        <p>{char.description}</p>
                    </div>
                </div>
                <h3>Comics:</h3>
                <ComicsList comics={char.comics.items}/>
            </div>
        )
    };

     componentDidMount() {
         this.props.getCharAction(this.props.match.params.id);
    }


    render() {
        let {isLoaded, currentChar} = this.props;
        console.log(this.props);
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

const mapDispatchToProps = dispatch => {
    return {
        getCharAction: id => dispatch(getChar(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharInfo);
