import React from 'react';
import Loader from './loader'

export default class CharCard extends React.Component {
    state = {
        loading: true,
        data: null
    }

    async componentDidMount() {
        this.setState({
            data: this.props.char,
            loading: false
        })
    }

     renderChar = (char) => {
        const {name, thumbnail} = char;
        return (
            <div onClick={() => {this.props.chooseChar(char)}} style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: 'center', minWidth: '100px', margin: '16px'}}>
                <p>{name}</p>
                <img src={`${thumbnail.path}/portrait_medium.jpg`} alt=""/>
            </div>
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