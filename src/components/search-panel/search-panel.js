import React from "react"

import './search-panel.css'

const SearchPanel = () => {
    const serchText = 'Type here to search'
    const searchStyle = {
        fontSize: '20px'
    }
    return <input
    placeholder = {serchText}
    style = {searchStyle} 
    />
}

export default SearchPanel