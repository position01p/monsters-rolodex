import { Component } from "react";
import './search-box.styles.css'


const SearchBox = (props) => {
    return (
        <input
            className={props.classNameHandler}
            type="search"
            placeholder={props.placeholderHandler}
            onChange={props.onChangerHandler}
        >

        </input>
    )
}

export default SearchBox