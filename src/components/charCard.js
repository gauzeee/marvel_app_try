import React from 'react';
import Loader from './loader'
import {Card, CardMedia, CardContent, Typography} from "@material-ui/core";
import {getChar} from "../actions/actions";
import {connect} from "react-redux";

class CharCard extends React.Component {
    state = {
        loading: true,
        data: null
    }

    componentDidMount() {
        this.setState({
            data: this.props.char,
            loading: false
        })
    }

    chooseChar = (char) => {
        this.props.getCharAction(char.id)
    }

     renderChar = (char) => {
        const {name, thumbnail, description} = char;
        return (
            <Card style={{maxWidth: "250px", margin: "6px", padding: "10px"}} onClick={() => {this.chooseChar(char)}}>
                <CardMedia>
                    <img src={`${thumbnail.path}/portrait_medium.jpg`} alt=""/>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }


    render() {
        let {data, loading} = this.state;

        return(
            <div >
                {loading ? <Loader/> : this.renderChar(data)}
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getCharAction: id => dispatch(getChar(id))
    }
};

export default connect(null, mapDispatchToProps)(CharCard);