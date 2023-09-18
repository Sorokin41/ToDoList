import React, { Component } from "react"

import './item-status-filter.css'


export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group" role="group" >
                <button type = "button"
                className="btn btn-outline-primary btn-info">All</button>
                <button type = "button"
                        className="btn btn-outline-secondary">Active</button>
                <button type = "button"
                        className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}