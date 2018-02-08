// core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// instruments
import Styles from './styles';

export default class TodoForm extends Component {
    static propTypes = {
        createTodo: PropTypes.func.isRequired
    };
    constructor () {
        super();
        this.handleSubmit = :: this._handleSubmit;
        this.createTodo = :: this._createTodo;
        this.handleChange = :: this._handleChange;
        this.handleKeyPress = :: this._handleKeyPress;
    }

    state = {
        color: '',
        title:  ''
    };

    _handleSubmit (event) {
        event.preventDefault();
        this.createTodo();
    }

    _handleChange (event) {
        const title = event.target.value;

        if (title.length > 30) {
            this.setState({
                color: '#FF4E2A'
            });
            title.slice(-1);
        } else {
            this.setState({
                color: 'inherit', title
            });
        }
    }

    _createTodo () {
        const { title } = this.state;

        if (title) {
            this.props.createTodo(title);
            this.setState({ title: '' });
        }
    }

    _handleKeyPress (event) {

        const enterKey = event.key === 'Enter';

        if (enterKey) {
            event.preventDefault();
            this.createTodo();
        }
    }

    render () {
        const { color, title } = this.state;

        console.log(title);
        return (
            <section className = { Styles.todoForm }>
                <div className = { Styles.checkbox } onChange = { this.handleToggle }>
                    <input
                        id = 'doneAll'
                        type = 'checkbox'
                    />
                    <label htmlFor = 'doneAll'>Done all</label>
                </div>
                <form onSubmit = { this.handleSubmit }>
                    <input
                        placeholder = 'Write here'
                        style = { { color: color } }
                        type = 'text'
                        value = { title }
                        onChange = { this.handleChange }
                        onKeyPress = { this.handleKeyPress }
                    />
                    <input type = 'submit' value = 'Add task' />
                </form>
            </section>
        );
    }
}
