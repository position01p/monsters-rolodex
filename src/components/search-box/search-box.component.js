import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
    render() {
        return (
                <input
                    className={this.props.classNameHandler}
                    type="search"
                    placeholder={this.props.placeholderHandler}
                    onChange={this.props.onChangerHandler}
                >

                </input>
        )
    }
}

export default SearchBox