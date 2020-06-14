import React, { Component } from 'react'
import './SearchField.css'

export default class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {processSearch} = this.props;
        let text = event.target.value
        this.setState({value: text});

        processSearch(text);
    }
    render() {
        return (
            <div className="search-field">
                <input type="text" placeholder={this.props.placeholder} onChange={this.handleChange}/>
            </div>
        )
    }
}
