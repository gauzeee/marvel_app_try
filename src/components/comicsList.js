import React from "react";


class ComicsList extends React.Component {

    render() {
        const {comics} = this.props;
        return(
            <ul className="comics-list">
                {comics.map((item, key) => {
                    return (
                        <li key={key}>
                            <a href={item.resourceURI}>{item.name}</a>
                        </li>
                    )})}
            </ul>
        )
    }
}

export default ComicsList;