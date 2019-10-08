import React from 'react';
import '../styles/loader.scss';
import hummer from '../images/hummer.png';


export default class Loader extends React.Component {

    render() {
        return (
            <div className="loader-hummer">
                <img src={hummer} alt=""/>
            </div>
        )
    }
}