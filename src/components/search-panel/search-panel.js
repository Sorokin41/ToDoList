import React, {Component} from "react"

import './search-panel.css'

export default class SearchPanel extends Component {
    
    state = {
        term: ''
    }

    onPannelChange = (event) => {
        const term = event.target.value
        this.setState({term})
        this.props.onSearch(term)
    }

    render() {
            return ( <input className="search-input"
            placeholder = {'Type here to search'}
            onChange={this.onPannelChange}
            value = {this.state.term} 
            />
        )
    }
}