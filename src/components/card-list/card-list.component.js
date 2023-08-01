import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'

class CardList extends Component {
    render() {
        const { monsters } = this.props
        return (
            <div className="card-list">
                {monsters.map((monster) =>{
                return (
                <div className="card-container">
                    <img
                        alt={`monsters ${monster.name}`}
                        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                    />
                    <h1 key={monster.id}>{monster.name}</h1>
                </div>
            )}
            )}




            </div>
        )
    }
}

export default CardList