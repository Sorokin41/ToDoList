import React, { Component } from "react"
import "./todo-list-item.css"

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }        
        })
    }

    onMarkImportantClick = () => {
         this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }
            
    render() {

        const {label, onDeleted} = this.props
        const {done, important} = this.state

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
                onClick={this.onLabelClick}> 
                { label }
            </span>
    
            <button type = "button"
                    className="btn btn-outline-success btn-sm todo-list-item-button float-sm-end"
                    onClick={this.onMarkImportantClick}>
                    <i className="fa-solid fa-exclamation"></i>
            </button>
    
            <button type = "button"
                    className="btn btn-outline-danger btn-sm todo-list-item-button float-sm-end"
                    onClick={onDeleted}>
                    <i className="fa-solid fa-trash"></i>
            </button>
            </span>
        )
    }
}