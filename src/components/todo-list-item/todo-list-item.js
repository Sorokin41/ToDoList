import React, { Component } from "react"

import "./todo-list-item.css"

export default class TodoListItem extends Component {

            
    render() {

        const {label, onDeleted, 
                onToggleImportant, onToggleDone,
                important, done} = this.props

        let classNames = 'todo-list-item'
        if(done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
    
        return (
            <span className={classNames}>
            <span 
                className="todo-list-item-label" 
                style = {style}
                onClick={onToggleDone}> 
                { label }
            </span>
    
            <button type = "button"
                    className="btn btn-outline-success btn-sm todo-list-item-button float-end"
                    onClick={onToggleImportant}>
                    <i className="fa-solid fa-exclamation"></i>
            </button>
    
            <button type = "button"
                    className="btn btn-outline-danger btn-sm todo-list-item-button float-end"
                    onClick={onDeleted}>
                    <i className="fa-solid fa-trash"></i>
            </button>
            </span>
        )
    }
}