import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle =() => {
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todos.completed ?
            'line-through':'none'
        }
    }

    render() {
        const {id,title} = this.props.todos
        return (
            <div style={this.getStyle()}>
               <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {' '}
                   {title}
                   <button onClick={this.props.delTodo.bind(this,id)} style ={btnStyle}>X</button>
               </p>
            </div>
        )
    }
}

const btnStyle ={
    background: '#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

Todoitem.propTypes = {
    todos: PropTypes.object.isRequired
}

export default Todoitem
