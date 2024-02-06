// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

export default class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInputchange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const filteredPlacesList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="seach-input">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onSearchInputchange}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="places-container">
          {filteredPlacesList.map(eachItem => (
            <DestinationItem placeDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
